import Header from "../../../src/components/Header";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Router from "vue-router";
import { EVENTS_PATH, FAVORITES_PATH } from "../../../src/utils/constants";

describe("Header", () => {
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
          path: FAVORITES_PATH
        }
      ]
    });
    spyRoutePush = jest.spyOn(mockRoute, "push");
    mockRoute.push(EVENTS_PATH);
    wrapper = shallowMount(Header, {
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
    expect(wrapper.find("[data-favorites-button]")).toBeTruthy();
  });

  test("should render favorites page", () => {
    mockRoute.push(FAVORITES_PATH);
    expect(wrapper.find("[data-suggest-events]")).toBeTruthy();
  });

  test("should go to events page", () => {
    wrapper.vm.goToEvents();
    expect(spyRoutePush).toHaveBeenCalledWith(EVENTS_PATH);
  });

  test("should go to favorites page", () => {
    wrapper.vm.goToFavorites();
    expect(spyRoutePush).toHaveBeenCalledWith(FAVORITES_PATH);
  });
});
