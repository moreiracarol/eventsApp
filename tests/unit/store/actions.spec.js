import DiscoveryApi from "../../../src/api/DiscoveryApi";
import actions from "../../../src/store/actions";
import StringUtils from "../../../src/utils/stringUtils";

describe("Actions", () => {
  const events = [
    {
      name: "Party",
      dates: {
        start: {
          localDate: "2020-03-20"
        }
      },
      price: "EUR 100"
    },
    {
      name: "Trip",
      date: {
        start: {
          localDate: "2020-03-21"
        }
      },
      price: "EUR500"
    }
  ];

  let commit = jest.fn();
  let dispatch = jest.fn();

  let context = {
    commit,
    dispatch
  };

  beforeEach(() => {
    jest.spyOn(StringUtils, "getDate").mockImplementation();
    jest.spyOn(StringUtils, "getPrice").mockImplementation();
    jest.spyOn(StringUtils, "getWeekDayName").mockImplementation();
    jest.spyOn(StringUtils, "getMonthName").mockImplementation();
  });

  test("getEvents", async () => {
    const spyFetchEvents = jest
      .spyOn(DiscoveryApi, "fetchEvents")
      .mockReturnValue(events);
    await actions.getEvents(context, { page: 0 });

    expect(spyFetchEvents).toHaveBeenCalled();
  });

  test("getSuggestions", async () => {
    const spyFetchSuggest = jest
      .spyOn(DiscoveryApi, "fetchSuggest")
      .mockReturnValue(events);
    await actions.getSuggestions(context, { page: 0 });

    expect(spyFetchSuggest).toHaveBeenCalled();
  });
});
