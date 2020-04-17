import MockAdapter from "axios-mock-adapter";
import IpApi from "../../../src/api/IpApi";
import axios from "axios";
import { IP_URL } from "../../../src/utils/constants";

describe("IpApi", () => {
  let mockAdapter;

  beforeEach(() => {
    mockAdapter = new MockAdapter(axios);
  });

  test("fetchLocation", async () => {
    const location = { countryCode: "DE", lat: "1.0000", lon: "2.0000" };
    mockAdapter.onGet(IP_URL).reply(200, location);

    const response = await IpApi.fetchLocation();
    expect(response).toStrictEqual(location);
  });
});
