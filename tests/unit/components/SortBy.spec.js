import SortBy from "@/components/SortBy";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue)

describe("<SortBy/>", () => {
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
