import axios from "axios";
import { IP_URL } from "../utils/constants";

export default {
  fetchCountryCode: async () => {
    const response = await axios.get(IP_URL, { crossdomain: true });
    return response.data.countryCode;
  }
};
