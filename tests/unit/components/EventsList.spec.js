import EventsList from "../../../src/components/EventsList";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("EventsList", () => {
  let wrapper, store, actions;

  afterEach(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    actions = {
      getEvents: jest.fn(),
      getSuggestions: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });

    wrapper = shallowMount(EventsList, {
      store,
      localVue,
      propsData: {
        isSuggested: false
      }
    });
  });

  test("should render the component", () => {
    expect(wrapper.find(".events-list")).toBeTruthy();
    expect(wrapper.find(".events-list__sort")).toBeTruthy();
    expect(wrapper.find(".events-list__sort__title")).toBeTruthy();
    expect(wrapper.find("[data-sort-select]")).toBeTruthy();
    expect(wrapper.find("[data-sort-options]")).toBeTruthy();
    expect(wrapper.find("[data-card-container]")).toBeTruthy();
    expect(wrapper.find("[data-card]")).toBeTruthy();
    expect(wrapper.find("[data-pagination]")).toBeTruthy();
  });
});
