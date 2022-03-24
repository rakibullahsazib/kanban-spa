import { expect, test, beforeEach, afterEach } from "vitest";
import { mount } from '@vue/test-utils'

import HeaderAddButton from './HeaderAddButton.vue'
import { nextTick } from "vue";

// render factory
let wrapper: any
const createWrapper = () => {
  wrapper = mount(HeaderAddButton, {
    props: {
      title: 'Title'
    }
  })
}
// helpers
const findBtn = () => wrapper.find('[data-testid=Title-add-btn]')

beforeEach(() => {
  createWrapper()
})
afterEach(() => {
  wrapper.unmount()
})

test('show button text as passed in props', async () => {
  expect(wrapper.text()).toBe('Title')
})
test('emit add event on add btn click', async () => {
  findBtn().trigger('click')
  await nextTick()
  expect(wrapper.emitted().add).toBeTruthy()
})
