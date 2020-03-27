import MockAdapter from "axios-mock-adapter";
import IpApi from "../../../src/api/IpApi";
import axios from "axios";
import { IP_URL } from "../../../src/utils/constants";

describe("IpApi", () => {
  let mockAdapter;

  beforeEach(() => {
    mockAdapter = new MockAdapter(axios);
  });

  test("fetchCountryCode", async () => {
    const countryCode = "DE";
    mockAdapter.onGet(IP_URL).reply(200, { countryCode });

    const response = await IpApi.fetchCountryCode();
    expect(response).toStrictEqual(countryCode);
  });
});
