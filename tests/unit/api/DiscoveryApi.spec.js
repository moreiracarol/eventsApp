import MockAdapter from "axios-mock-adapter";
import DiscoveryApi from "@/api/DiscoveryApi";
import axios from "axios";
import { API_KEY, DISCOVER_URL } from "@/utils/constants";

describe("DiscoveryApi", () => {
  const latLong = "1.000,2.000";
  let mockAdapter;

  beforeEach(() => {
    mockAdapter = new MockAdapter(axios);
  });

  test("fetchEvents", async () => {
    const data = { _embedded: { events: [{ foo: "bar" }] } };
    mockAdapter
      .onGet(
        `${DISCOVER_URL}/events.json?countryCode=DE&apikey=${API_KEY}&page=0&sort=date,asc&latlong=${latLong}`
      )
      .reply(200, data);

    const response = await DiscoveryApi.fetchEvents(
      0,
      "date,asc",
      "DE",
      latLong
    );
    expect(response).toStrictEqual(data);
  });
});
