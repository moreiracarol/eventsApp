import DiscoveryApi from "../api/DiscoveryApi";
import { getEventsList } from "../utils/stringUtils";
import store from "../store";
import IpApi from "../api/IpApi";
import { Auth } from "aws-amplify";
import { EVENTS_PATH, LOGIN_PATH } from "../utils/constants";
import router from "../router";

export default {
  getEvents: async (context, { page, sort = "date,asc" }) => {
    const countryCode = await IpApi.fetchCountryCode();
    const data = await DiscoveryApi.fetchEvents(page, sort, countryCode);
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
    const events = store.state.favorites;
    context.commit("saveEvents", events);
  },
  setUser: context => {
    Auth.currentAuthenticatedUser()
      .then(auth => {
        context.commit("saveUser", auth);
      })
      .catch(() => context.commit("setSignOut"));
    router.push(EVENTS_PATH);
  },
  signOut: context => {
    context.commit("setSignOut");
    context.commit("clearAll");
    router.push(LOGIN_PATH);
  }
};
