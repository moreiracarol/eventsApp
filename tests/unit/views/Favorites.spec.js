import Favorites from "@/views/Favorites";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Router from "vue-router";
import { EVENTS_PATH, FAVORITES_PATH } from "@/utils/constants";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Router);
localVue.use(Vuex);

describe("<Favorites/>", () => {
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
    wrapper = shallowMount(Favorites, { localVue, store, router: mockRoute });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should go to events page", () => {
    wrapper.vm.goToEvents();
    expect(spyRoutePush).toHaveBeenCalledWith(EVENTS_PATH);
  });
});
