import axios from "axios";
import { API_KEY, DISCOVER_URL } from "../utils/constants";

export default {
  fetchEvents: async (page, sort) => {
    const response = await axios.get(
      `${DISCOVER_URL}/events.json?countryCode=DE&apikey=${API_KEY}&page=${page}&sort=${sort}`
    );
    return response.data._embedded.events;
  },
  fetchSuggest: async (page, sort) => {
    const response = await axios.get(
      `${DISCOVER_URL}/suggest.json?countryCode=DE&apikey=${API_KEY}&page=${page}&sort=${sort}`
    );
    return response.data._embedded.events;
  }
};
