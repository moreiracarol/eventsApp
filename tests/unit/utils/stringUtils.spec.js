import {
  getEventsList,
  getPrice,
  getDate,
  getWeekDayName,
  getMonthName,
  isEventsPage
} from "../../../src/utils/stringUtils";

describe("StringUtils", () => {
  const date = new Date("2020-03-20");
  const dates = {
    start: {
      localDate: date
    }
  };
  const output = [
    {
      name: "Party",
      price: "Free",
      date: "Friday, 20 March 2020"
    }
  ];
  const input = [
    {
      name: "Party",
      priceRanges: "",
      dates,
      foo: "bar"
    }
  ];

  test("getEventsList", () => {
    expect(getEventsList(input)).toStrictEqual(output);
  });

  test("getPrice", () => {
    expect(getPrice(input)).toBe("Free");
  });

  test("getDate", () => {
    expect(getDate({ dates })).toBe("Friday, 20 March 2020");
  });

  test("isEventsPage", () => {
    expect(isEventsPage("/events")).toBeTruthy();
  });

  test("getMonthName", () => {
    expect(getMonthName("2")).toBe("March");
  });

  test("getWeekDayName", () => {
    expect(getWeekDayName("5")).toBe("Friday");
  });
});
