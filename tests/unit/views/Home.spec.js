import Home from "../../../src/views/Home";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Router from "vue-router";
import { EVENTS_PATH, SUGGEST_PATH } from "../../../src/utils/constants";

describe("Home", () => {
  const localVue = createLocalVue();
  localVue.use(Router);
  let wrapper, mockRoute, spyRoutePush;

  beforeEach(() => {
    mockRoute = new Router({
      routes: [
        {
          path: EVENTS_PATH
        },
        {
          path: SUGGEST_PATH
        }
      ]
    });
    spyRoutePush = jest.spyOn(mockRoute, "push");
    mockRoute.push(EVENTS_PATH);
    wrapper = shallowMount(Home, {
      localVue,
      router: mockRoute,
      computed: {
        isEventRoute() {
          return true;
        }
      }
    });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render events page", () => {
    expect(wrapper.find("[data-suggest-button]")).toBeTruthy();
  });

  test("should render suggest page", () => {
    mockRoute.push(SUGGEST_PATH);
    expect(wrapper.find("[data-suggest-events]")).toBeTruthy();
  });

  test("should go to events page", () => {
    wrapper.vm.goToEvents();
    expect(spyRoutePush).toHaveBeenCalledWith(EVENTS_PATH);
  });

  test("should go to suggest page", () => {
    wrapper.vm.goToSuggest();
    expect(spyRoutePush).toHaveBeenCalledWith(SUGGEST_PATH);
  });
});
