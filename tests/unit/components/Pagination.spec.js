import Pagination from "../../../src/components/Pagination";
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("<Pagination/>", () => {
  const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Pagination, {
      localVue,
      propsData: {
        totalPages: 10
      }
    });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should emit gotoPage event", () => {
    wrapper.vm.gotoPage(3);
    expect(wrapper.emitted("gotoPage", 3)).toBeTruthy();
  });
});
