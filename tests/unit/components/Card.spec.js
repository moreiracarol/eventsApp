import Card from "../../../src/components/Card";
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("Cards", () => {
  const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      localVue,
      propsData: {
        event: { date: "2020-03-20", name: "party", price: "EUR 100" }
      }
    });
  });

  test("should render the component", () => {
    expect(wrapper.find(".card")).toBeTruthy();
    expect(wrapper.find(".card__date")).toBeTruthy();
    expect(wrapper.find(".card__name")).toBeTruthy();
    expect(wrapper.find(".card__price")).toBeTruthy();
  });
});
