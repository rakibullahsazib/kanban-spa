import { describe, expect, test, beforeEach, afterEach } from "vitest";
import { mount, VueWrapper } from '@vue/test-utils'

import SingleSelectDropdown from './SingleSelectDropdown.vue'
import { fake_dropdownOptions } from "../../../fakeData/dropdown.fake";
import { nextTick } from "vue";

let wrapper: VueWrapper
// helpers
const findDropdown = () => wrapper.find('[data-testid=single-select-dropdown]')
const findLabel = () => wrapper.find('label')

describe('label visiblity based on props', () => {
  afterEach(() => {
    wrapper.unmount()
  })
  test('label should not exist if it is not truthy in props', async () => {
    wrapper = mount(SingleSelectDropdown, {
      props: {
        options: [],
        isDropdownShown: false
      }
    })
    expect(findLabel().exists()).toBe(false)
  })
  test('label should exist if it is defined in props', async () => {
    wrapper = mount(SingleSelectDropdown, {
      props: {
        options: [],
        isDropdownShown: false,
        label: 'Test Label'
      }
    })
    expect(findLabel().exists()).toBe(true)
  })
})

describe('border color based on errorMessage passed in props', () => {
  afterEach(() => {
    wrapper.unmount()
  })
  test('border color should not be red if errorMessage is not truthy', async () => {
    wrapper = mount(SingleSelectDropdown, {
      props: {
        options: [],
        isDropdownShown: false
      }
    })
    expect(wrapper.classes()).not.toContain('border-red')
  })
  test('border color should be red if errorMessage is passed', async () => {
    wrapper = mount(SingleSelectDropdown, {
      props: {
        options: [],
        isDropdownShown: false,
        errorMessage: 'Test error message'
      }
    })
    expect(wrapper.classes()).toContain('border-red')
  })
})

describe('dropdown hidden', () => {
  afterEach(() => {
    wrapper.unmount()
  })
  test('dropdown should be hidden if isDropdownShown is false in props', async () => {
    wrapper = mount(SingleSelectDropdown, {
      props: {
        options: [],
        isDropdownShown: false
      }
    })
    expect(findDropdown().isVisible()).toBe(false)
  })
  test('dropdown should be hidden if no option is passed', async () => {
    wrapper = mount(SingleSelectDropdown, {
      props: {
        options: [],
        isDropdownShown: true
      }
    })
    expect(findDropdown().isVisible()).toBe(false)
  })
  test('dropdown should be hidden if no option is passed and isDropdownShown is false', async () => {
    wrapper = mount(SingleSelectDropdown, {
      props: {
        options: [],
        isDropdownShown: false
      }
    })
    expect(findDropdown().isVisible()).toBe(false)
  })
})
describe('dropdown visible', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(SingleSelectDropdown, {
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
  test('emit optionClicked event and toggle event on option click', async () => {
    await findOptionById(fake_dropdownOptions[0].id).trigger('click')
    expect(wrapper.emitted().optionClicked).toBeTruthy()
    expect(wrapper.emitted().optionClicked[0]).toEqual([fake_dropdownOptions[0].id])
    await nextTick()
    expect(wrapper.emitted().toggle).toBeTruthy()
  })
})