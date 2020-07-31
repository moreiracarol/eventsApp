import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import Form from '@/layouts/Form'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('<Form />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Form, {
      localVue
    })
  })

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should emit an event to submit form', () => {
    wrapper.vm.submit()
    expect(wrapper.emitted('submit')).toBeTruthy()
  })
})
