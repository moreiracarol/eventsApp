import getters from "../../../src/store/getters";

describe("Getters", () => {
  const events = [
    {
      name: "Party",
      dates: "2020-03-20",
      price: "EUR 100"
    },
    {
      name: "Trip",
      date: "2020-03-21",
      price: "EUR500"
    }
  ];

  test("allEvents", () => {
    const state = { events };
    expect(getters.allEvents(state)).toBe(events);
  });
  test("suggestEvents", () => {
    const state = { suggest: events };
    expect(getters.suggestEvents(state)).toBe(events);
  });
});
