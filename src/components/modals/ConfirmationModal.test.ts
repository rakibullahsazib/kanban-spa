import { expect, test, describe, beforeEach, afterEach, fn } from "vitest";
import ConfirmationModal from './ConfirmationModal.vue'
import Button from '../buttons/Button.vue';
import { mount, VueWrapper } from '@vue/test-utils'

let wrapper: VueWrapper
// helpers
const findTitle = () => wrapper.find(`[data-testid=title]`)
const findMessage = () => wrapper.find(`[data-testid=message]`)
const findNoBtn = () => wrapper.findComponent(`[data-testid=noBtn]`)
const findYesBtn = () => wrapper.findComponent(`[data-testid=yesBtn]`)
const findBtn = () => wrapper.findComponent(Button)
const findAllBtn = () => wrapper.findAllComponents(Button)
const findCrossImg = () => wrapper.find(`[data-testid=cross-img]`)

describe('renders correctly based on props', () => {
  afterEach(() => {
    wrapper.unmount()
  })
  test('do not render message and noBtn when only title and yesBtn are passed as props, only render title and yes btn', async () => {
    wrapper = mount(ConfirmationModal, {
      props: {
        title: 'Test Title',
        yesBtn: 'Yes'
      }
    })
    expect(findTitle().text()).toBe('Test Title')
    expect(findYesBtn().exists()).toBe(true)
    expect(findBtn().props('title')).toBe('Yes')
    expect(findMessage().exists()).toBe(false)
    expect(findNoBtn().exists()).toBe(false)
  })
  test('render message when passed as props, but do not render noBtn when it is not passed in props', async () => {
    wrapper = mount(ConfirmationModal, {
      props: {
        title: 'Test Title',
        yesBtn: 'Yes',
        message: 'Test message'
      }
    })
    expect(findTitle().text()).toBe('Test Title')
    expect(findMessage().exists()).toBe(true)
    expect(findNoBtn().exists()).toBe(false)
    expect(findYesBtn().exists()).toBe(true)
    expect(findBtn().props('title')).toBe('Yes')
  })
  test('render message and noBtn when both are passed as props', async () => {
    wrapper = mount(ConfirmationModal, {
      props: {
        title: 'Test Title',
        yesBtn: 'Yes',
        message: 'Test message',
        noBtn: 'No'
      }
    })
    expect(findTitle().text()).toBe('Test Title')
    expect(findMessage().exists()).toBe(true)
    expect(findNoBtn().exists()).toBe(true)
    expect(findAllBtn()[0].props('title')).toBe('No')
    expect(findYesBtn().exists()).toBe(true)
    expect(findAllBtn()[1].props('title')).toBe('Yes')
  })
})
describe('emit events', () => {
  beforeEach(() => {
    wrapper = mount(ConfirmationModal, {
      props: {
        title: 'Test Title',
        yesBtn: 'Yes',
        message: 'Test message',
        noBtn: 'No'
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test('emit close modal on background click', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().closeModal).toBeTruthy()
  })
  test('emit close modal on cross img click', async () => {
    await findCrossImg().trigger('click')
    expect(wrapper.emitted().closeModal).toBeTruthy()
  })
  test('emit close modal on noBtn click', async () => {
    await findAllBtn()[0].vm.$emit('click')
    expect(wrapper.emitted().closeModal).toBeTruthy()
  })
  test('emit close modal on yesbtn click', async () => {
    await findAllBtn()[1].vm.$emit('click')
    expect(wrapper.emitted().confirm).toBeTruthy()
  })
})