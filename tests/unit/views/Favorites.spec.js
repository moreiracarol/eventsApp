import Favorites from "../../../src/views/Favorites";
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("Favorites", () => {
  const localVue = createLocalVue();
  let wrapper;

  test("should render the component", () => {
    wrapper = shallowMount(Favorites, { localVue });
    expect(wrapper).toMatchSnapshot();
  });
});
