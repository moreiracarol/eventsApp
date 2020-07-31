import DiscoveryApi from "@/api/DiscoveryApi";
import actions from "@/store/actions";
import StringUtils from "@/utils/stringUtils";
import IpApi from "@/api/IpApi";
import { Auth } from "aws-amplify";

const event = {
  id: "1",
  name: "Party",
  dates: {
    start: {
      localDate: "2020-03-20"
    }
  },
  price: "Free",
  images: [{ url: "foo" }],
  favorite: false,
  url: "url"
};

const formattedEvent = {
  id: "1",
  name: "Party",
  date: {
    start: {
      localDate: "2020-03-20"
    }
  },
  price: "Free",
  image: "foo",
  favorite: false,
  url: "url"
};

describe("Actions", () => {
  const events = [event];
  const page = { totalPages: 10 };
  const user = { email: "user@app.com", password: "123" };

  let commit = jest.fn();

  beforeEach(() => {
    jest.spyOn(StringUtils, "getPrice").mockImplementation();
  });

  test("getEvents", async () => {
    const location = {
      countryCode: "DE",
      lat: "1.000",
      lon: "2.000"
    };
    const spyFetchEvents = jest
      .spyOn(DiscoveryApi, "fetchEvents")
      .mockReturnValue({ _embedded: { events }, page });
    const spyFetchLocation = jest
      .spyOn(IpApi, "fetchLocation")
      .mockReturnValue(location);

    await actions.getEvents({ commit }, { page: 0 });
    expect(spyFetchLocation).toHaveBeenCalled();
    expect(spyFetchEvents).toHaveBeenCalledWith(
      0,
      "date,asc",
      "DE",
      "1.000,2.000"
    );
    expect(commit).toHaveBeenCalledWith("saveEvents", [formattedEvent]);
    expect(commit).toHaveBeenCalledWith(
      "saveTotalPages",
      page.totalPages
    );
  });

  test("addToFavorites", async () => {
    await actions.addToFavorites({ commit }, event);
    expect(commit).toHaveBeenCalledWith("saveFavorite", event.id);
    expect(commit).toHaveBeenCalledWith("updateFavoritesList", event);
  });

  test("getFavorites", async () => {
    await actions.getFavorites({ commit });
    expect(commit).toHaveBeenCalledWith("saveEvents", [formattedEvent]);
  });

  test("load", async () => {
    jest.spyOn(Auth, "currentAuthenticatedUser").mockResolvedValue(user);
    await actions.load({ commit });
    expect(commit).toHaveBeenCalledWith("setUser", user);
  });

  test("register", async () => {
    jest.spyOn(Auth, "signUp").mockResolvedValue(user);
    await actions.register({ commit }, user);
    expect(commit).toHaveBeenCalledWith("setUser", user);
  });

  test("confirmRegistration", async () => {
    jest.spyOn(Auth, "confirmSignUp").mockResolvedValue(user);
    await actions.confirmRegistration({ commit }, user);
    expect(commit).toHaveBeenCalledWith("setUser", user);
  });

  test("login", async () => {
    jest.spyOn(Auth, "signIn").mockResolvedValue(user);
    await actions.login({ commit }, user);
    expect(commit).toHaveBeenCalledWith("setUser", user);
  });

  test("logout", async () => {
    jest.spyOn(Auth, "signOut").mockImplementation();
    await actions.logout({ commit });
    expect(commit).toHaveBeenCalledWith("setUser", null);
  });

  test("clearAuthError", async () => {
    await actions.clearAuthError({ commit });
    expect(commit).toHaveBeenCalledWith("setAuthError", null);
  });
});
