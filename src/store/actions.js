import DiscoveryApi from "../api/DiscoveryApi";
import { getEventsList } from "../utils/stringUtils";
import store from "../store"
import IpApi from "../api/IpApi";

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
  getFavorites: (context) => {
    const events = store.state.favorites;
    context.commit("saveEvents", events);
  }
};
