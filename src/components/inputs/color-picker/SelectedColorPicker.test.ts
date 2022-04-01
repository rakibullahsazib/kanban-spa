import { describe, expect, test, beforeEach, afterEach } from "vitest";
import { mount, VueWrapper } from '@vue/test-utils'
import SelectedColorPicker from './SelectedColorPicker.vue'
import { taskBackgroundColors } from "../../../helpers/data/colors";
import { hexToRGB } from "../../../helpers/colorCode";

let wrapper: VueWrapper
// helpers
const findDropdown = () => wrapper.find('[data-testid=color-picker-dropdown]')
const findDropdownColorOption = (color: number) => wrapper.find(`[data-testid=color-option-${color}]`)
const findSelectedColor = () => wrapper.find(`[data-testid=selected-color]`)

describe('Selected Color visibility based on props', () => {
  afterEach(() => {
    wrapper.unmount()
  })
  test('selected color should not be shown if it is not passed in props', async () => {
    wrapper = mount(SelectedColorPicker, {
      props: {
        colors: taskBackgroundColors,
        isDropdownShown: false
      }
    })
    expect(findSelectedColor().exists()).toBe(false)
  })
  test('selected color should be shown if it is passed in props and the background should have the color passed', async () => {
    wrapper = mount(SelectedColorPicker, {
      props: {
        colors: taskBackgroundColors,
        isDropdownShown: false,
        selectedColor: '#252525'
      }
    })
    expect(findSelectedColor().exists()).toBe(true)
    expect(findSelectedColor().attributes('style')).toContain(`background-color: ${hexToRGB('#252525')}`)
  })
})

describe('Case: dropdown hidden', () => {
  afterEach(() => {
    wrapper.unmount()
  })
  test('dropdown should be hidden if isDropdownShown is false in props', async () => {
    wrapper = mount(SelectedColorPicker, {
      props: {
        colors: taskBackgroundColors,
        isDropdownShown: false
      }
    })
    expect(findDropdown().isVisible()).toBe(false)
  })
  test('dropdown should be hidden if no option is passed', async () => {
    wrapper = mount(SelectedColorPicker, {
      props: {
        colors: [],
        isDropdownShown: true
      }
    })
    expect(findDropdown().isVisible()).toBe(false)
  })
  test('dropdown should be hidden if no option is passed and isDropdownShown is false', async () => {
    wrapper = mount(SelectedColorPicker, {
      props: {
        colors: [],
        isDropdownShown: false
      }
    })
    expect(findDropdown().isVisible()).toBe(false)
  })
})

describe('Case: dropdown visible', () => {
  beforeEach(() => {
    wrapper = mount(SelectedColorPicker, {
      props: {
        colors: taskBackgroundColors,
        selectedColor: '#252525',
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
  test('dropdown should have all the options with appropriate background color', async () => {
    for (let i = 0; i < taskBackgroundColors.length; i++) {
      expect(findDropdownColorOption(i).exists()).toBe(true)
      expect(findDropdownColorOption(i).attributes('style')).toContain(`background-color: ${hexToRGB(taskBackgroundColors[i])}`)
    }
  })
  test('on clicking selected color element emit toggle event', async () => {
    await findSelectedColor().trigger('click')
    expect(wrapper.emitted().toggle).toBeTruthy()
  })
  test('emit event with selected color on option click', async () => {
    await findDropdownColorOption(1).trigger('click')
    expect(wrapper.emitted().optionClicked).toBeTruthy()
    expect(wrapper.emitted().optionClicked[0]).toEqual([taskBackgroundColors[1]])
  })
})