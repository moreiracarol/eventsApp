import Vue from "vue";
import Vuex from "vuex";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    events: [],
    favorites: [],
    totalPages: 0
  },
  plugins: [createPersistedState()],
  actions,
  getters,
  mutations
});
