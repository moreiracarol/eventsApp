import EventsList from "@/components/EventsList";
import { createLocalVue, shallowMount } from "@vue/test-utils";

const localVue = createLocalVue();

describe("<EventsList/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(EventsList, {
      localVue,
      propsData: {
        showAllEvents: true
      },
      computed: {
        isEmptyScreen: () => false
      }
    });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should load empty list", () => {
    wrapper = shallowMount(EventsList, {
      localVue,
      propsData: {
        showAllEvents: true
      },
      computed: {
        isEmptyScreen: () => true
      }
    });

    expect(wrapper).toMatchSnapshot();
  });

  test("should NOT load SortBy components", () => {
    wrapper = shallowMount(EventsList, {
      localVue,
      propsData: {
        showAllEvents: false
      },
      computed: {
        isEmptyScreen: () => false
      }
    });

    expect(wrapper).toMatchSnapshot();
  });

  test("should NOT load SortBy components", () => {
    wrapper = shallowMount(EventsList, {
      localVue,
      data() {
        return { totalPages: 2 };
      },
      propsData: {
        showAllEvents: false
      },
      computed: {
        isEmptyScreen: () => false
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
