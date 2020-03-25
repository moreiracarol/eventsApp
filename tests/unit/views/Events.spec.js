import Events from "../../../src/views/Events";
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("Cards", () => {
  const localVue = createLocalVue();
  let wrapper;

  test("should render the component", () => {
    wrapper = shallowMount(Events, { localVue });
    expect(wrapper).toMatchSnapshot();
  });
});
