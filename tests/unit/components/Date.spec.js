import Date from "@/components/Date";
import { createLocalVue, shallowMount } from "@vue/test-utils";

const localVue = createLocalVue();

describe("<Date/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Date, {
      localVue,
      propsData: {
        date: {
          start: {
            localDate: "2020-04-03"
          }
        }
      }
    });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should display the formatted date", () => {
    const formattedDate = "Friday, 3 April 2020";
    expect(wrapper.vm.getDate).toEqual(formattedDate);
  });
});
