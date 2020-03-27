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
  const dates = { start: { localDate: date } };
  const images = [{ url: "foo" }];
  const output = [
    {
      id: 1,
      name: "Party",
      price: "Free",
      url: "url",
      date: "Friday, 20 March 2020",
      image: "foo",
      favorite: false
    }
  ];
  const input = [
    {
      id: 1,
      name: "Party",
      priceRanges: "",
      url: "url",
      dates,
      images
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

  test("getMonthName", () => {
    expect(getMonthName("2")).toBe("March");
  });

  test("getWeekDayName", () => {
    expect(getWeekDayName("5")).toBe("Friday");
  });

  test("isEventsPage", () => {
    expect(isEventsPage("/events")).toBeTruthy();
  });
});
