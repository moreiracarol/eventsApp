import Events from "../../../src/views/Events";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import { EVENTS_PATH, FAVORITES_PATH } from "../../../src/utils/constants";
import Router from "vue-router";
const localVue = createLocalVue();
localVue.use(Router);

describe("<Events />", () => {
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
    wrapper = shallowMount(Events, { localVue, router: mockRoute });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should go to favorites page", () => {
    wrapper.vm.goToFavorites();
    expect(spyRoutePush).toHaveBeenCalledWith(FAVORITES_PATH);
  });
});
