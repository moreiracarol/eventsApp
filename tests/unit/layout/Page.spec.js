import { createLocalVue, shallowMount } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";
import Vuex from "vuex";
import Router from "vue-router";
import Page from "@/layouts/Page";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);
localVue.use(Router);

describe("<Page />", () => {
  let wrapper, spyDispatch, mockRoute, store;

  beforeEach(() => {
    mockRoute = new Router({});
    store = new Vuex.Store({
      modules: {
        namespaced: true,
        actions: {
          logout: jest.fn()
        }
      }
    });
    spyDispatch = jest.spyOn(store, "dispatch");
    wrapper = shallowMount(Page, {
      localVue,
      store,
      router: mockRoute,
      propsData: {
        pageTitle: "foo",
        buttonLabel: "bar"
      }
    });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("shold emit an event to move to another page", () => {
    wrapper.vm.goToPage();
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  test("should logout user", () => {
    wrapper.vm.logout();
    expect(spyDispatch).toHaveBeenCalledWith("logout");
  });
});
