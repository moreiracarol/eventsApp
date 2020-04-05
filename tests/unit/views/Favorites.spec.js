import Favorites from "../../../src/views/Favorites";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Router from "vue-router";
import { EVENTS_PATH, FAVORITES_PATH } from "../../../src/utils/constants";

const localVue = createLocalVue();
localVue.use(Router);

describe("<Favorites/>", () => {
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
    wrapper = shallowMount(Favorites, { localVue, router: mockRoute });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should go to events page", () => {
    wrapper.vm.goToEvents();
    expect(spyRoutePush).toHaveBeenCalledWith(EVENTS_PATH);
  });
});
