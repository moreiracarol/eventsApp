import DiscoveryApi from "../api/DiscoveryApi";
import { getEventsList } from "../utils/stringUtils";
import store from "../store";
import IpApi from "../api/IpApi";

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
  }
};
