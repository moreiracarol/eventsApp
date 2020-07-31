import Events from "@/views/Events";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import { EVENTS_PATH, FAVORITES_PATH } from "@/utils/constants";
import Router from "vue-router";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Router);
localVue.use(Vuex);

describe("<Events />", () => {
  let wrapper, mockRoute, spyRoutePush, store;

  beforeEach(() => {
    mockRoute = new Router({
      routes: [
        {
          path: EVENTS_PATH
        },
        {
          path: FAVORITES_PATH
        }
      ]
    });
    store = new Vuex.Store({
      modules: {
        namespaced: true,
        getters: {
          isAuthenticated: () => true
        }
      }
    });
    spyRoutePush = jest.spyOn(mockRoute, "push");
    wrapper = shallowMount(Events, { localVue, store, router: mockRoute });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should go to favorites page", () => {
    wrapper.vm.goToFavorites();
    expect(spyRoutePush).toHaveBeenCalledWith(FAVORITES_PATH);
  });
});
