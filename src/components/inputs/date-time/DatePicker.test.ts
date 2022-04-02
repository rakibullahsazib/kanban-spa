import { describe, expect, test, beforeEach, afterEach } from "vitest";
import { mount, VueWrapper } from '@vue/test-utils'
import DatePicker from './DatePicker.vue'
import { DatePicker as VDatePicker } from 'v-calendar'
import { stringifyDate } from "../../../helpers/dateFormatter";
import { nextTick } from "vue";

let wrapper: VueWrapper
// helpers
const findLabel = () => wrapper.find('label')
const findSelectedDate = () => wrapper.find(`[data-testid=selected-date]`)
const findDropdown = () => wrapper.find('[data-testid=date-picker-dropdown]')

describe('label visiblity based on props', () => {
  afterEach(() => {
    wrapper.unmount()
  })
  test('label should not exist if it is not truthy in props', async () => {
    wrapper = mount(DatePicker, {
      props: {
        isDropdownShown: false
      }
    })
    expect(findLabel().exists()).toBe(false)
  })
  test('label should exist if it is defined in props', async () => {
    wrapper = mount(DatePicker, {
      props: {
        isDropdownShown: false,
        label: 'Test Label'
      }
    })
    expect(findLabel().exists()).toBe(true)
  })
})

describe('selected date should be always visible', () => {
  afterEach(() => {
    wrapper.unmount()
  })
  test('selected date should be today if date is not passed in props', async () => {
    wrapper = mount(DatePicker, {
      props: {
        isDropdownShown: false
      }
    })
    expect(findSelectedDate().exists()).toBe(true)
    expect(findSelectedDate().text()).toBe(stringifyDate(new Date()))
  })
  test('selected date should be the specified date if date is passed in props', async () => {
    wrapper = mount(DatePicker, {
      props: {
        isDropdownShown: false,
        date: '2011-10-05T14:48:00.000Z'
      }
    })
    expect(findSelectedDate().exists()).toBe(true)
    expect(findSelectedDate().text()).toBe('Oct 05, 2011')
  })
})

describe('Case: dropdown hidden', () => {
  afterEach(() => {
    wrapper.unmount()
  })
  test('dropdown should be hidden if isDropdownShown is false in props', async () => {
    wrapper = mount(DatePicker, {
      props: {
        isDropdownShown: false
      }
    })
    expect(findDropdown().isVisible()).toBe(false)
  })
})

describe('Case: dropdown visible', () => {
  beforeEach(() => {
    wrapper = mount(DatePicker, {
      props: {
        isDropdownShown: true
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test('dropdown should be visible initially when isDropdown is true', () => {
    expect(findDropdown().isVisible()).toBe(true)
  })
  test('date picker component from v-calendar exists', () => {
    expect(wrapper.findComponent(VDatePicker).exists()).toBe(true)
  })
  test('on clicking selected date element emit toggle event', async () => {
    await findSelectedDate().trigger('click')
    expect(wrapper.emitted().toggle).toBeTruthy()
  })
  test('emit event on date change', async () => {
    wrapper.findComponent(VDatePicker).setValue(new Date('2011-10-05T14:48:00.000Z'))
    await nextTick()
    expect(wrapper.emitted().toggle).toBeTruthy()
    expect(wrapper.emitted().toggle[0]).toEqual(['2011-10-05T14:48:00.000Z'])
  })
})