import DiscoveryApi from "@/api/DiscoveryApi";
import { getEventsList } from "@/utils/stringUtils";
import store from "@/store";
import IpApi from "@/api/IpApi";
import {Auth} from "aws-amplify";

export default {
  getEvents: async (context, { page, sort = "date,asc" }) => {
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
    context.commit("saveEvents", events);
    context.commit("saveTotalPages", totalPages);
  },
  addToFavorites: (context, event) => {
    context.commit("saveFavorite", event.id);
    context.commit("updateFavoritesList", event);
  },
  getFavorites: context => {
    const events = store.getters.favorites;
    context.commit("saveEvents", events);
  },
  async load({ commit }) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      commit("setUser", user);
      return user;
    } catch (e) {
      commit("setUser", null);
    }
  },
  async register({ commit }, { email, password }) {
    try {
      await Auth.signUp({
        username: email,
        password
      });
      commit("setRegister", true);
    } catch (e) {
      commit("setAuthError", e);
    }
  },
  async confirmRegistration({ commit }, { email, code }) {
    try {
      await Auth.confirmSignUp(email, code);
      commit("setConfirmed", true);
    } catch (e) {
      commit("setAuthError", e);
    }
  },
  async login({ commit }, { email, password }) {
    const user = await Auth.signIn(email, password);
    commit("setUser", user);
  },
  async logout({ commit }) {
    await Auth.signOut();
    commit("setUser", null);
  }
};
