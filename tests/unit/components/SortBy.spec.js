import SortBy from "../../../src/components/SortBy";
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("<SortBy/>", () => {
  const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SortBy, {
      localVue
    });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should emit sortEvents event", () => {
    wrapper.vm.sortEvents("sort");
    expect(wrapper.emitted("sortEvents", "sort")).toBeTruthy();
  });
});
