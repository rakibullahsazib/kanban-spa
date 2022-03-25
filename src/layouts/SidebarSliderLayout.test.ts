import { expect, test, describe, beforeEach, afterEach } from "vitest";
import SidebarSliderLayout from './SidebarSliderLayout.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { nextTick } from "vue";

// render factory
let wrapper: VueWrapper
const createWrapper = () => {
  wrapper = mount(SidebarSliderLayout, {
    props: {
      title: 'Title'
    }
  })
}
// helpers
const findToggleBtn = () => wrapper.find('[data-testid=sidebar-slider-toggle-btn]')
const findSliderTitle = () => wrapper.find('[data-testid=sidebar-slider-title]')
const getSliderContent = () => wrapper.get('[data-testid=sidebar-slider-content]')

beforeEach(() => {
  createWrapper()
})
afterEach(() => {
  wrapper.unmount()
})

test('show title as passed in props', async () => {
  expect(findSliderTitle().text()).toBe('Title')
})
test('initially slider expanded, content is hidden, toggle button is not rotated', async () => {
  expect(wrapper.classes()).toContain('expanded')
  expect(getSliderContent().attributes('style')).toBe(undefined)
  expect(findToggleBtn().classes()).not.toContain('rotate-180')
})
test('on toggle button click change states of slider, its content and rotate button', async () => {
  // collapse content
  await findToggleBtn().trigger('click')
  expect(wrapper.classes()).toContain('collapsed')
  expect(getSliderContent().attributes('style')).toContain('display: none')
  expect(findToggleBtn().classes()).toContain('rotate-180')
  // expand content
  await findToggleBtn().trigger('click')
  expect(wrapper.classes()).toContain('expanded')
  expect(getSliderContent().attributes('style')).toBe(undefined)
  expect(findToggleBtn().classes()).not.toContain('rotate-180')
})