import mutations from "../../../src/store/mutations";

describe("Mutations", () => {
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
  let state = {};

  test("saveEvents", () => {
    mutations.saveEvents(state, events);
    expect(state.events).toBe(events);
  });

  test("saveSuggest", () => {
    mutations.saveSuggest(state, events);
    expect(state.events).toBe(events);
  });
});
