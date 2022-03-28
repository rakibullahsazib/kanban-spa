import { describe, expect, test, beforeEach, afterEach } from "vitest";
import { mount, VueWrapper } from '@vue/test-utils'

import Button from './Button.vue'

// render factory
let wrapper: VueWrapper

// helpers
const findBtn = () => wrapper.find('button')


describe('disabled state', () => {
  const createWrapper = () => {
    wrapper = mount(Button, {
      props: {
        title: 'Title',
        disabled: true
      }
    })
  }
  beforeEach(() => {
    createWrapper()
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test('show button text as passed in props', async () => {
    expect(wrapper.text()).toBe('Title')
  })
  test('button disabled', () => {
    expect(wrapper.props('disabled')).toBeTruthy()
  })
})

describe('not disabled state', () => {
  const createWrapper = () => {
    wrapper = mount(Button, {
      props: {
        title: 'Title'
      }
    })
  }
  beforeEach(() => {
    createWrapper()
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test('show button text as passed in props', async () => {
    expect(wrapper.text()).toBe('Title')
  })
  test('button not disabled', () => {
    expect(wrapper.attributes('disabled')).toBeFalsy()
  })
})
describe('not disabled state when disabled is false', () => {
  const createWrapper = () => {
    wrapper = mount(Button, {
      props: {
        title: 'Title',
        disabled: false
      }
    })
  }
  beforeEach(() => {
    createWrapper()
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test('show button text as passed in props', async () => {
    expect(wrapper.text()).toBe('Title')
  })
  test('button not disabled', () => {
    expect(wrapper.attributes('disabled')).toBeFalsy()
  })
})



