import MockAdapter from "axios-mock-adapter";
import DiscoveryApi from "../../../src/api/DiscoveryApi";
import axios from "axios";
import { API_KEY, DISCOVER_URL } from "../../../src/utils/constants";

describe("DiscoveryApi", () => {
  let mockAdapter;

  beforeEach(() => {
    mockAdapter = new MockAdapter(axios);
  });

  test("fetchEvents", async () => {
    const events = [{ foo: "bar" }];
    mockAdapter
      .onGet(
        `${DISCOVER_URL}/events.json?countryCode=DE&apikey=${API_KEY}&page=0&sort=date,asc`
      )
      .reply(200, { _embedded: { events } });

    const response = await DiscoveryApi.fetchEvents(0, "date,asc");
    expect(response).toStrictEqual(events);
  });

  test("fetchSuggest", async () => {
    const events = [{ foo: "bar" }];
    mockAdapter
      .onGet(
        `${DISCOVER_URL}/suggest.json?countryCode=DE&apikey=${API_KEY}&page=0&sort=date,asc`
      )
      .reply(200, { _embedded: { events } });

    const response = await DiscoveryApi.fetchSuggest(0, "date,asc");
    expect(response).toStrictEqual(events);
  });
});
