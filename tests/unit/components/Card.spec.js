import Card from "../../../src/components/Card";
import { createLocalVue, shallowMount } from "@vue/test-utils";

const localVue = createLocalVue();

describe("<Card/>", () => {
  let wrapper;
  let event = { id: "1", favorite: false };

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      localVue,
      propsData: {
        event
      },
      computed: {
        getIcon: () => { return "foo" },
        getRedirectIcon: () => { return "bar" }
      }
    });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should redirect user to event page", () => {
    window.open = jest.fn();
    wrapper.find(".card__icons__redirect").trigger("click");
    expect(window.open).toHaveBeenCalled();
  });
});
