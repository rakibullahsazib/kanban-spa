import { describe, expect, test, beforeEach, afterEach } from "vitest";
import { mount, VueWrapper } from '@vue/test-utils'

import HeadlessSingleSelectDropdown from './HeadlessSingleSelectDropdown.vue'
import { fake_dropdownOptions } from "../../../fakeData/dropdown.fake";

describe('dropdown hidden', () => {
  let wrapper: VueWrapper
  afterEach(() => {
    wrapper.unmount()
  })
  test('dropdown should be hidden if isDropdownShown is false in props', async () => {
    wrapper = mount(HeadlessSingleSelectDropdown, {
      props: {
        options: [],
        isDropdownShown: false
      }
    })
    expect(wrapper.isVisible()).toBe(false)
  })
  test('dropdown should be hidden if no option is passed', async () => {
    wrapper = mount(HeadlessSingleSelectDropdown, {
      props: {
        options: [],
        isDropdownShown: true
      }
    })
    expect(wrapper.isVisible()).toBe(false)
  })
  test('dropdown should be hidden if no option is passed and isDropdownShown is false', async () => {
    wrapper = mount(HeadlessSingleSelectDropdown, {
      props: {
        options: [],
        isDropdownShown: false
      }
    })
    expect(wrapper.isVisible()).toBe(false)
  })
})
describe('dropdown visible', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(HeadlessSingleSelectDropdown, {
      props: {
        options: fake_dropdownOptions,
        isDropdownShown: true
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })
  // helpers
  const findOptionById = (id: string) => wrapper.find(`[data-testid=option_${id}]`)
  const findOptionIconById = (id: string) => wrapper.find(`[data-testid=option_${id}] > img`)

  test('dropdown should have all the options', async () => {
    for (let i = 0; i < fake_dropdownOptions.length; i++) {
      expect(findOptionById(fake_dropdownOptions[i].id).exists()).toBe(true)
    }
  })
  test('show icon if option have icon', async () => {
    for (let i = 0; i < fake_dropdownOptions.length; i++) {
      if (fake_dropdownOptions[i].icon) {
        expect(findOptionIconById(fake_dropdownOptions[i].id).exists()).toBe(true)
        expect(findOptionIconById(fake_dropdownOptions[i].id).attributes('src')).toContain(fake_dropdownOptions[i].icon)
      }
    }
  })
  test('do not show icon if option have no icon', async () => {
    for (let i = 0; i < fake_dropdownOptions.length; i++) {
      if (!fake_dropdownOptions[i].icon) {
        expect(findOptionIconById(fake_dropdownOptions[i].id).exists()).toBe(false)
      }
    }
  })
  test('emit event on option click', async () => {
    await findOptionById(fake_dropdownOptions[0].id).trigger('click')
    expect(wrapper.emitted().optionClicked).toBeTruthy()
    expect(wrapper.emitted().optionClicked[0]).toEqual([fake_dropdownOptions[0].id])
  })
})


