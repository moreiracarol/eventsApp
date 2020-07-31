import mutations from "@/store/mutations";

describe("Mutations", () => {
  const events = [
    {
      id: 1,
      name: "Party",
      dates: "2020-03-20",
      price: "EUR 100",
      favorite: false
    },
    {
      id: 2,
      name: "Trip",
      date: "2020-03-21",
      price: "EUR500",
      favorite: false
    }
  ];
  let state = {
    events: [],
    favorites: []
  };

  test("saveEvents", () => {
    mutations.saveEvents(state, events);
    expect(state.events).toBe(events);
  });

  test("saveTotalPages", () => {
    const totalPages = 10;
    mutations.saveTotalPages(state, totalPages);
    expect(state.totalPages).toBe(totalPages);
  });

  test("saveFavorite", () => {
    const event = events[0];
    mutations.saveFavorite(state, event.id);
    expect(state.events[0]).toBeTruthy();
  });

  test("updateFavoritesList", () => {
    const event = events[0];
    mutations.updateFavoritesList(state, event);
    expect(state.favorites[0]).toBe(event);
  });
});
