import { createLocalVue, shallowMount } from "@vue/test-utils";
import Router from "vue-router";
import { BootstrapVue } from "bootstrap-vue";
import Vuex from "vuex";
import Login from "@/views/Login";
import { EVENTS_PATH } from "@/utils/constants";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);
localVue.use(Router);

describe("<login />", () => {
  const user = { email: "user@app.com", password: "123" };
  let wrapper, store, mockRoute, spyDispatch, spyRoutePush;

  beforeEach(() => {
    mockRoute = new Router({});
    store = new Vuex.Store({
      modules: {
        namespaced: true,
        actions: {
          login: jest.fn(),
          clearAuthError: jest.fn()
        },
        state: {
          isAuthenticated: false,
          error: null
        }
      }
    });
    spyRoutePush = jest.spyOn(mockRoute, "push");
    spyDispatch = jest.spyOn(store, "dispatch");
    wrapper = shallowMount(Login, {
      localVue,
      store,
      router: mockRoute,
      data: () => ({ email: user.email, password: user.password })
    });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should redirect to events page if user logged", () => {
    store.getters.isAuthenticated = () => true;
    wrapper = shallowMount(Login, {
      localVue,
      store,
      router: mockRoute
    });
    expect(spyRoutePush).toHaveBeenCalledWith(EVENTS_PATH);
  });

  test("should dispatch an action to login", () => {
    wrapper.vm.login();
    expect(spyDispatch).toHaveBeenCalledWith("login", user);
  });
});
