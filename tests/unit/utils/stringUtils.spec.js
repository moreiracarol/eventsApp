import {
  getEventsList,
  getPrice,
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
      date: dates,
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

  test("isEventsPage", () => {
    expect(isEventsPage("/events")).toBeTruthy();
  });
});
