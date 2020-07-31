export default {
  saveEvents(state, events) {
    state.events = events;
  },
  saveTotalPages(state, totalPages) {
    state.totalPages = totalPages;
  },
  saveFavorite(state, eventId) {
    const event = state.events.find(item => item.id === eventId);
    event.favorite = !event.favorite;
  },
  updateFavoritesList(state, event) {
    event.favorite
      ? state && state.favorites && state.favorites.push(event)
      : (state.favorites =
          state &&
          state.favorites &&
          state.favorites.filter(item => item.id !== event.id));
  },
  setUser(state, user) {
    state.isAuthenticated = !!user;
  },
  setRegister(state, isRegistered) {
    state.isRegistered = isRegistered;
  },
  setConfirmed(state, isConfirmed) {
    state.isRegistered = isConfirmed;
  },
  setAuthError(state, error) {
    state.authError = error;
  }
};
