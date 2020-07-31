export default {
  allEvents: state => {
    return state.events;
  },
  favorites: state => {
    return state.favorites;
  },
  totalPages: state => {
    return state.totalPages;
  },
  isAuthenticated: state => {
    return state.isAuthenticated;
  },
  isRegistered: state => {
    return state.isRegistered;
  },
  error: state => {
    return state.authError;
  }
};
