import { expect, test, describe, beforeEach, afterEach, fn } from "vitest";
import BoardModal from './BoardModal.vue'
import TextInput from '../inputs/TextInput.vue';
import Textarea from '../inputs/Textarea.vue';
import Button from '../buttons/Button.vue';
import { mount, VueWrapper } from '@vue/test-utils'
import { useBoardStore } from '../../store/board.store'
import { getMaxOrder } from '../../helpers/arrayMethods'
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from "vue";
import { fake_boards } from "../../fakeData/board.fake";

let boardStore: ReturnType<typeof useBoardStore>  
let wrapper: VueWrapper

// helpers
const findTextInput = () => wrapper.findComponent(TextInput)
const findTextareaInput = () => wrapper.findComponent(Textarea)
const findBtn = () => wrapper.findComponent(Button)

describe('Case: Add board, components exists', () => {
  const createWrapper = () => {
    wrapper = mount(BoardModal, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  // Text Input
  test('TextInput component exists', async () => {
    expect(findTextInput().exists()).toBe(true)
  })
  // Textarea component
  test('Textarea component exists', async () => {
    expect(findTextareaInput().exists()).toBe(true)
  })
  // Add btn
  test('button component exists', async () => {
    expect(findBtn().exists()).toBe(true)
  })
  test('Btn title is Add Board', async () => {
    await nextTick()
    expect(findBtn().props('title')).toBe('Add Board')
  })
})

describe('Case: Add board, TextInput input events', () => {
  const createWrapper = () => {
    wrapper = mount(BoardModal, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  test('Text Input component emits event', async () => {
    findTextInput().vm.$emit('inputChange', 'test input')
    expect(findTextInput().emitted().inputChange).toBeTruthy()
    expect(findTextInput().emitted().inputChange[0]).toEqual(['test input'])
  })
  test('pass error message as props to TextInput when boardName is empty', async () => {
    findTextInput().vm.$emit('inputChange', '')
    await nextTick()
    expect(findTextInput().props('errorMessage')).not.toBe('')
  })
  test('pass error message as props to TextInput when board name already exists', async () => {
    boardStore.boards = [
      {
        id: '1',
        name: 'Test Board',
        description: 'Test board description',
        order: 1,
        createdAt: new Date().toISOString()
      }
    ]
    findTextInput().vm.$emit('inputChange', 'test board')
    await nextTick()
    expect(findTextInput().props('errorMessage')).not.toBe('')
  })
})

describe('Case: Add board, TextArea component events', () => {
  const createWrapper = () => {
    wrapper = mount(BoardModal, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  test('Textarea component emits event', async () => {
    findTextareaInput().vm.$emit('inputChange', 'test input')
    expect(findTextareaInput().emitted().inputChange).toBeTruthy()
    expect(findTextareaInput().emitted().inputChange[0]).toEqual(['test input'])
  })
})

describe('Case: Add board, Btn Component Events', () => {
  const createWrapper = () => {
    wrapper = mount(BoardModal, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  // error cases
  test('when boardName is empty, button should be disabled', async () => {
    findTextInput().vm.$emit('inputChange', '')
    await nextTick()
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when board name already exists, button should be disabled', async () => {
    boardStore.boards = [
      {
        id: '1',
        name: 'Test Board',
        description: 'Test board description',
        order: 1,
        createdAt: new Date().toISOString()
      }
    ]
    findTextInput().vm.$emit('inputChange', 'test board')
    await nextTick()
    expect(findTextInput().props('errorMessage')).not.toBe('')
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('on btn click add board to store', async () => {
    findTextInput().vm.$emit('inputChange', 'Board Name')
    findTextareaInput().vm.$emit('inputChange', 'Board Description')
    await nextTick()

    findBtn().vm.$emit('click')
    expect(findBtn().emitted().click).toBeTruthy()

    await nextTick()
    expect(boardStore.boards.length).toBe(1)
    expect(boardStore.boards[0].name).toBe('Board Name')
    expect(boardStore.boards[0].description).toBe('Board Description')

    expect(wrapper.emitted().closeModal).toBeTruthy()
  })
})

describe('Case: Edit Board, Components exists and props are passed initially', () => {
  const createWrapper = () => {
    wrapper = mount(BoardModal, {
      props: {
        board: fake_boards[0]
      },
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.boards = [...fake_boards]
  })
  afterEach(() => {
    wrapper.unmount()
    boardStore.$reset()
  })
  // Text Input
  test('TextInput component exists', async () => {
    expect(findTextInput().exists()).toBe(true)
  })
  test('name is passed as initial value prop into text input component', async () => {
    await nextTick()
    expect(findTextInput().props('initialValue')).toBe('Board 1')
  })
  
  // Textarea component
  test('Textarea component exists', async () => {
    expect(findTextareaInput().exists()).toBe(true)
  })
  test('description is passed as initial value prop into Textarea component', async () => {
    await nextTick()
    expect(findTextareaInput().props('initialValue')).toBe('Board 1 Description')
  })
  // Btn component
  test('Btn component exists', async () => {
    expect(findBtn().exists()).toBe(true)
  })
  test('Btn is disabled initially', async () => {
    await nextTick()
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('Btn title is Save Changes', async () => {
    await nextTick()
    expect(findBtn().props('title')).toBe('Save Changes')
  })
  
})

describe('Case: Edit Board, TextInput events', () => {
  const createWrapper = () => {
    wrapper = mount(BoardModal, {
      props: {
        board: fake_boards[0]
      },
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.boards = [...fake_boards]
  })
  afterEach(() => {
    wrapper.unmount()
    boardStore.$reset()
  })
  test('Text Input component emits event', async () => {
    findTextInput().vm.$emit('inputChange', 'test input')
    expect(findTextInput().emitted().inputChange).toBeTruthy()
    expect(findTextInput().emitted().inputChange[0]).toEqual(['test input'])
  })
  test('pass error message as props to TextInput when boardName is empty', async () => {
    findTextInput().vm.$emit('inputChange', '')
    await nextTick()
    expect(findTextInput().props('errorMessage')).not.toBe('')
  })
  test('pass error message as props to TextInput when board name already exists', async () => {
    findTextInput().vm.$emit('inputChange', 'Board 2')
    await nextTick()
    expect(findTextInput().props('errorMessage')).not.toBe('')
  })
  test('do not pass error message as props to TextInput if the value is the same as current board being edited', async () => {
    // show error when name of another board is passed as input
    findTextInput().vm.$emit('inputChange', 'Board 2')
    await nextTick()
    findTextInput().vm.$emit('inputChange', 'Board 1')
    await nextTick()
    expect(findTextInput().props('errorMessage')).toBe('')
  })
})

describe('Case: Edit Board, Textarea events', () => {
  const createWrapper = () => {
    wrapper = mount(BoardModal, {
      props: {
        boardId: fake_boards[0]
      },
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.boards = [...fake_boards]
  })
  afterEach(() => {
    wrapper.unmount()
    boardStore.$reset()
  })
  test('Textarea component emits event', async () => {
    findTextareaInput().vm.$emit('inputChange', 'test input')
    expect(findTextareaInput().emitted().inputChange).toBeTruthy()
    expect(findTextareaInput().emitted().inputChange[0]).toEqual(['test input'])
  })
})

describe('Case: Edit Board, Btn component events', () => {
  const createWrapper = () => {
    wrapper = mount(BoardModal, {
      props: {
        board: fake_boards[0]
      },
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.boards = [...fake_boards]
  })
  afterEach(() => {
    wrapper.unmount()
    boardStore.$reset()
  })
  test('when boardName is empty, btn should be disabled', async () => {
    findTextInput().vm.$emit('inputChange', '')
    await nextTick()
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when board name already exists and the name is not same as the current board name which is being edited, btn should be disabled', async () => {
    findTextInput().vm.$emit('inputChange', 'Board 2')
    await nextTick()
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when board name is same and no changes in board description is done, btn should be disabled', async () => {
    findTextInput().vm.$emit('inputChange', 'Board')
    await nextTick()
    findTextInput().vm.$emit('inputChange', 'Board 2')
    await nextTick()
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when board name is same and description changed, btn should be active', async () => {
    await findTextareaInput().vm.$emit('inputChange', 'Changed Description')
    await nextTick()
    expect(findBtn().props('disabled')).toBe(false)
  })
  test('when board name changes and description is same, btn should be active', async () => {
    await findTextInput().vm.$emit('inputChange', 'Changed Name')
    await nextTick()
    expect(findBtn().props('disabled')).toBe(false)
  })
  test('when both board name and description changes and description is same, btn should be active', async () => {
    await findTextInput().vm.$emit('inputChange', 'Changed Name')
    await findTextareaInput().vm.$emit('inputChange', 'Changed Description')
    await nextTick()
    expect(findBtn().props('disabled')).toBe(false)
  })
  test('on save changes btn click, update board in store', async () => {
    findTextInput().vm.$emit('inputChange', 'Board Name')
    findTextareaInput().vm.$emit('inputChange', 'Board Description')
    await nextTick()

    findBtn().vm.$emit('click')
    expect(findBtn().emitted().click).toBeTruthy()

    await nextTick()
    expect(boardStore.boards.length).toBe(fake_boards.length)
    expect(boardStore.boards[0].name).toBe('Board Name')
    expect(boardStore.boards[0].description).toBe('Board Description')

    expect(wrapper.emitted().closeModal).toBeTruthy()
  })
})
