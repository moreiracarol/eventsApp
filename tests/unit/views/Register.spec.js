import { createLocalVue, shallowMount } from "@vue/test-utils";
import Router from "vue-router";
import { BootstrapVue } from "bootstrap-vue";
import Vuex from "vuex";
import Register from "@/views/Register";
import { EVENTS_PATH } from "@/utils/constants";
import Login from "@/views/Login";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);
localVue.use(Router);

describe("<register />", () => {
  const registerForm = { email: "user@app.com", password: "123" };
  const confirmForm = { email: "user@app.com", code: "123" };

  let wrapper, store, mockRoute, spyDispatch, spyRoutePush;

  beforeEach(() => {
    mockRoute = new Router({});
    store = new Vuex.Store({
      modules: {
        namespaced: true,
        actions: {
          register: jest.fn(),
          confirmRegistration: jest.fn(),
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
    wrapper = shallowMount(Register, {
      localVue,
      store,
      router: mockRoute,
      data: () => ({ registerForm, confirmForm })
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

  test("should dispatch an action to register user", () => {
    wrapper.vm.register();
    expect(spyDispatch).toHaveBeenCalledWith("register", registerForm);
  });

  test("should dispatch an action to confirm user", () => {
    wrapper.vm.confirm();
    expect(spyDispatch).toHaveBeenCalledWith(
      "confirmRegistration",
      confirmForm
    );
  });

  test("should dispatch an action to login after confirm user", () => {
    wrapper.vm.confirm();
    expect(spyDispatch).toHaveBeenCalledWith("login", registerForm);
  });
});
