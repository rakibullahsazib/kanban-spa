import { expect, test, beforeEach, afterEach } from "vitest";
import { mount } from '@vue/test-utils'

import SearchInput from './SearchInput.vue'
import { nextTick } from "vue";

// render factory
let wrapper: any
const createWrapper = () => {
  wrapper = mount(SearchInput, {
    props: {
      id: 'test-id',
      placeholder: 'test-placeholder'
    }
  })
}
// helpers
const findSearchInput = () => wrapper.find('[data-testid=search-input]')
beforeEach(() => {
  createWrapper()
})
afterEach(() => {
  wrapper.unmount()
})

test('input exists with passed props', async () => {
  expect(findSearchInput().exists()).toBe(true)
  expect(findSearchInput().attributes('id')).toBe('test-id')
  expect(findSearchInput().attributes('placeholder')).toBe('test-placeholder')
})
test('emit event with input value as payload', async () => {
  findSearchInput().setValue('test-value')
  await nextTick()
  expect(wrapper.emitted().inputChange).toBeTruthy()
  expect(wrapper.emitted().inputChange[0]).toEqual(['test-value'])
})