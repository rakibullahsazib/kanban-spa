import { describe, expect, test, beforeEach, afterEach } from "vitest";
import { mount, VueWrapper } from '@vue/test-utils'

import ButtonWithIcon from './ButtonWithIcon.vue'

// render factory
let wrapper: VueWrapper

// helpers
const findBtn = () => wrapper.find('button')


describe('icon existence', () => {
  afterEach(() => {
    wrapper.unmount()
  })
  test('hide icon when not passed in props', async () => {
    wrapper = mount(ButtonWithIcon, {
      props: {
        title: 'Title',
        disabled: true
      }
    })
    expect(wrapper.find('img').exists()).toBe(false)
  })
  test('show icon when passed in props', async () => {
    wrapper = mount(ButtonWithIcon, {
      props: {
        title: 'Title',
        disabled: true,
        icon: 'test.svg'
      }
    })
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toContain('test.svg')
  })
})

describe('disabled state', () => {
  const createWrapper = () => {
    wrapper = mount(ButtonWithIcon, {
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
    wrapper = mount(ButtonWithIcon, {
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
    wrapper = mount(ButtonWithIcon, {
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



