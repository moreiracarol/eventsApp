import Card from "../../../src/components/Card";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue)

describe("<Card/>", () => {
  let wrapper;
  let event = { id: "1", favorite: false, date: { start: "2020-03-20" } };

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      localVue,
      propsData: {
        event
      },
      computed: {
        getIcon: () => {
          return "foo";
        },
        getRedirectIcon: () => {
          return "bar";
        }
      }
    });
  });

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should redirect user to event page", () => {
    window.open = jest.fn();
    wrapper.find("[data-icon-redirect]").trigger("click");
    expect(window.open).toHaveBeenCalled();
  });
});
