import Suggest from "../../../src/views/Suggest";
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("Cards", () => {
  const localVue = createLocalVue();
  let wrapper;

  test("should render the component", () => {
    wrapper = shallowMount(Suggest, { localVue });
    expect(wrapper).toMatchSnapshot();
  });
});
