import { describe, expect, test, beforeEach, afterEach } from "vitest";
import { mount, VueWrapper } from '@vue/test-utils'

import TextInput from './TextInput.vue'

// render factory
let wrapper: VueWrapper

// helpers
const findInput = () => wrapper.find('input')
const findLabel = () => wrapper.find('label')

describe('different prop state', () => {
  afterEach(() => {
    wrapper.unmount()
  })
  test('show only input and hide label when label is not passed in props', async () => {
    wrapper = mount(TextInput, {
      props: {
        limit: 10
      }
    })
    expect(findInput().exists()).toBe(true)
    expect(findLabel().exists()).toBe(false)
  })
  test('show only input and hide label when label is not passed in props', async () => {
    wrapper = mount(TextInput, {
      props: {
        label: 'Test',
        limit: 10
      }
    })
    expect(findInput().exists()).toBe(true)
    expect(findLabel().exists()).toBe(true)
  })
  test('label for and input id exists when id is passed in props', async () => {
    wrapper = mount(TextInput, {
      props: {
        id: 'Test-id',
        label: 'Test',
        limit: 10
      }
    })
    expect(findInput().attributes('id')).toBe('Test-id')
    expect(findLabel().attributes('for')).toBe('Test-id')
  })
})

describe('label lifting and events', () => {
  const createWrapper = () => {
    wrapper = mount(TextInput, {
      props: {
        label: 'Label',
        limit: 10
      }
    })
  }
  beforeEach(() => {
    createWrapper()
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test('emit input event on input change', async () => {
    await findInput().setValue('Test value')
    expect(wrapper.emitted().inputChange).toBeTruthy()
    expect(wrapper.emitted().inputChange[0]).toEqual(['Test value'])
  })
  test('emit trimmed value input change', async () => {
    await findInput().setValue('  Test value  ')
    expect(wrapper.emitted().inputChange[0]).toEqual(['Test value'])
  })
  test('emit substring within limit', async () => {
    await findInput().setValue('  Test value astarstastras arst  ')
    expect(wrapper.emitted().inputChange).toBeTruthy()
    expect(wrapper.emitted().inputChange[0]).toEqual(['Test value'])
  })
  test('label element has class label which ensures that it gets lifted when input is focused',async () => {
    expect(findLabel().classes()).toContain('label')
  })
  test('lift the label if there is input value',async () => {
    await findInput().setValue('Test value')
    expect(findLabel().classes()).toContain('label-lifted')
  })  
})


