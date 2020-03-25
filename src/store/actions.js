import DiscoveryApi from "../api/DiscoveryApi";
import { getEventsList } from "../utils/stringUtils";

export default {
  getEvents: async (context, { page, sort = "date,asc" }) => {
    const data = await DiscoveryApi.fetchEvents(page, sort);
    const events = getEventsList(data);
    context.commit("saveEvents", events);
  },
  getSuggestions: async (context, { page, sort = "date,asc" }) => {
    const data = await DiscoveryApi.fetchSuggest(page, sort);
    const events = getEventsList(data);
    context.commit("saveSuggest", events);
  }
};
