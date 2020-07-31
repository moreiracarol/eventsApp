import getters from "@/store/getters";

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

  test("favorites", () => {
    const state = { favorites: events };
    expect(getters.favorites(state)).toBe(events);
  });

  test("totalPages", () => {
    const state = { totalPages: 10 };
    expect(getters.totalPages(state)).toBe(10);
  });

  test("isAuthenticated", () => {
    const state = { isAuthenticated: false };
    expect(getters.isAuthenticated(state)).toBeFalsy();
  });

  test("isRegistered", () => {
    const state = { isRegistered: false };
    expect(getters.isRegistered(state)).toBeFalsy();
  });

  test("totalPages", () => {
    const state = { authError: "Authentication error" };
    expect(getters.error(state)).toBe("Authentication error");
  });
});
