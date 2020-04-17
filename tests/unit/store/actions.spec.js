import DiscoveryApi from "../../../src/api/DiscoveryApi";
import actions from "../../../src/store/actions";
import StringUtils from "../../../src/utils/stringUtils";
import IpApi from "../../../src/api/IpApi";

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

  let commit = jest.fn();
  let dispatch = jest.fn();

  let context = {
    commit,
    dispatch
  };

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

    await actions.getEvents(context, { page: 0 });
    expect(spyFetchLocation).toHaveBeenCalled();
    expect(spyFetchEvents).toHaveBeenCalledWith(0, "date,asc", "DE", "1.000,2.000");
    expect(context.commit).toHaveBeenCalledWith("saveEvents", [formattedEvent]);
    expect(context.commit).toHaveBeenCalledWith(
      "saveTotalPages",
      page.totalPages
    );
  });

  test("addToFavorites", async () => {
    await actions.addToFavorites(context, event);
    expect(context.commit).toHaveBeenCalledWith("saveFavorite", event.id);
    expect(context.commit).toHaveBeenCalledWith("updateFavoritesList", event);
  });

  test("getFavorites", async () => {
    await actions.getFavorites(context);
    expect(context.commit).toHaveBeenCalledWith("saveEvents", [formattedEvent]);
  });
});
