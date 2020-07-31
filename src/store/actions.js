import DiscoveryApi from "@/api/DiscoveryApi";
import { getEventsList } from "@/utils/stringUtils";
import store from "@/store";
import IpApi from "@/api/IpApi";
import { Auth } from "aws-amplify";

export default {
  getEvents: async ({ commit }, { page, sort = "date,asc" }) => {
    const location = await IpApi.fetchLocation();
    const latLong = `${location.lat},${location.lon}`;
    const data = await DiscoveryApi.fetchEvents(
      page,
      sort,
      location.countryCode,
      latLong
    );
    const events = getEventsList(data._embedded.events);
    const totalPages = data.page.totalPages;
    commit("saveEvents", events);
    commit("saveTotalPages", totalPages);
  },
  addToFavorites: ({ commit }, event) => {
    commit("saveFavorite", event.id);
    commit("updateFavoritesList", event);
  },
  getFavorites: ({ commit })  => {
    const events = store.getters.favorites;
    commit("saveEvents", events);
  },
  load: async ({ commit }) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      commit("setUser", user);
      return user;
    } catch (e) {
      commit("setUser", null);
    }
  },
  register: async ({ commit }, { email, password }) => {
    try {
      await Auth.signUp({
        username: email,
        password
      });
      commit("setRegister", true);
    } catch (e) {
      commit("setAuthError", e.message);
    }
  },
  confirmRegistration: async ({ commit }, { email, code }) => {
    try {
      await Auth.confirmSignUp(email, code);
      commit("setConfirmed", true);
    } catch (e) {
      commit("setAuthError", e.message);
    }
  },
  login: async ({ commit }, { email, password }) => {
    try {
      const user = await Auth.signIn(email, password);
      commit("setUser", user);
    } catch (e) {
      commit("setAuthError", e.message);
    }
  },
  logout: async ({ commit }) => {
    await Auth.signOut();
    commit("setUser", null);
  },
  clearAuthError: ({ commit }) => {
    commit("setAuthError", null);
  }
};
