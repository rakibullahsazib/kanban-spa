import { expect, test, describe, beforeEach, afterEach, fn } from "vitest";
import HomeHeader from './HomeHeader.vue'
import HeadlessSingleSelectDropdown from '../../inputs/dropdowns/HeadlessSingleSelectDropdown.vue';
import BoardModal from '../../modals/BoardModal.vue'
import ConfirmationModal from '../../modals/ConfirmationModal.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { useBoardStore } from '../../../store/boardStore'
import { getMaxOrder } from '../../../helpers/arrayMethods'
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from "vue";
import { fake_boards, fake_currentBoard } from "../../../fakeData/board.fake";

let boardStore: ReturnType<typeof useBoardStore>  
const createBoard = () => {
  const maxOrder = getMaxOrder(boardStore.boards)
  boardStore.addBoard({
    name: 'Test Board',
    description: 'Test Board Description',
    order: maxOrder + 1
  })

  return boardStore.boards[boardStore.boards.length - 1].id
}
const setCurrentBoard = () => {
  boardStore.currentBoard = fake_currentBoard
}
// render factory
let wrapper: VueWrapper
const createWrapper = () => {
  wrapper = mount(HomeHeader, {
    global: { 
      plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
    }
  })
}
// helpers
const findBoardModal = () => wrapper.findComponent(BoardModal)
const findConfirmationModal = () => wrapper.findComponent(ConfirmationModal)
const findAddBoardBtn = () => wrapper.find('[data-testid=add-board-btn]')
const findDropdownBtn = () => wrapper.find('[data-testid=dropdown-btn]')
const findDropdown = () => wrapper.findComponent(HeadlessSingleSelectDropdown)
const findBoardTitle = () => wrapper.find(`[data-testid=board-title]`)
const findBoardDescription = () => wrapper.find(`[data-testid=board-description]`)
const findBoardDescriptionMessage = () => wrapper.find(`[data-testid=board-description-message]`)
const findEditBtn = () => wrapper.find(`[data-testid=edit-btn]`)
const findDeleteBtn = () => wrapper.find(`[data-testid=delete-btn]`)


describe('board title', () => {
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    setCurrentBoard()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })

  test('board title rendered correctly', async () => {
    expect(findBoardTitle().exists()).toBe(true)
    expect(findBoardTitle().text()).toBe(boardStore.currentBoard?.name)
  })
})

describe('boards dropdown', () => {
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.boards = [...fake_boards]
    setCurrentBoard()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })

  test('dropdown button exists', async () => {
    expect(findDropdownBtn().exists()).toBe(true)
  })
  test('dropdown collapsed initially', async () => {
    expect(findDropdown().exists()).toBe(true)
    expect(findDropdown().props('isDropdownShown')).toBe(false)
  })
  test('on dropdown button click, toggle dropdown,', async () => {
    expect(findDropdown().props('isDropdownShown')).toBe(false)

    await findDropdownBtn().trigger('click')
    expect(findDropdown().props('isDropdownShown')).toBe(true)
    
    await findDropdownBtn().trigger('click')
    expect(findDropdown().props('isDropdownShown')).toBe(false)
  })
  test('props are passed correctly into dropdown component', async () => {
    expect(findDropdown().props('options')).toStrictEqual(boardStore.boards)
    expect(findDropdown().props('selectedOptionId')).toStrictEqual(boardStore.currentBoard?.id)
  })
  test('on dropdown optionClicked event emit, set current board to the emitted id', async () => {
    const idEmitted = fake_boards[0].id
    await findDropdown().vm.$emit('optionClicked', idEmitted)
    expect(boardStore.currentBoard?.id).toBe(idEmitted)
    expect(findDropdown().props('selectedOptionId')).toStrictEqual(boardStore.currentBoard?.id)
    expect(findBoardTitle().text()).toBe(boardStore.currentBoard?.name)
  })
})

describe('board description', () => {
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    setCurrentBoard()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })

  test('current board description button exists', async () => {
    expect(findBoardDescription().exists()).toBe(true)
  })
  test('current board description message exists and the same as in store', async () => {
    expect(findBoardDescriptionMessage().exists()).toBe(true)
    expect(findBoardDescriptionMessage().text()).toBe(boardStore.currentBoard?.description)
  })
  test('current board description has proper classes to be visible on hover', async () => {
    expect(findBoardDescription().classes()).toContain('parent-hover')
    expect(findBoardDescriptionMessage().classes()).toContain('child-visible')
  })
})

describe('edit board button and board modal', () => {
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.boards = [...fake_boards]
    setCurrentBoard()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  test('show edit board modal on edit button click, board should be passed as props', async () => {    
    expect(findBoardModal().exists()).toBe(false)    
    await findEditBtn().trigger('click')
    expect(findBoardModal().exists()).toBe(true)
    expect(findBoardModal().props('board').id).toBe(boardStore.currentBoard?.id)
  })

  test('on emitting closeModal event from an open Board Modal closes the board modal', async () => {
    await findEditBtn().trigger('click')
    expect(findBoardModal().exists()).toBe(true)
    
    await findBoardModal().vm.$emit('closeModal')
    expect(findBoardModal().exists()).toBe(false)
  })
})

describe('delete board button and confirmation modal', () => {
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.boards = [...fake_boards]
    setCurrentBoard()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  test('delete button exists', async () => {    
    expect(findDeleteBtn().exists()).toBe(true)
  })
  test('confirmation modal does not exist initially', async () => {    
    expect(findConfirmationModal().exists()).toBe(false)
  })
  test('clicking on board delete button opens up confirmation modal', async () => {
    await findDeleteBtn().trigger('click')
    expect(findConfirmationModal().exists()).toBe(true)
  })
  test('opened confirmation modal emits closeModal and it gets closed', async () => {
    await findDeleteBtn().trigger('click')
    expect(findConfirmationModal().exists()).toBe(true)
    await findConfirmationModal().vm.$emit('closeModal')
    expect(findConfirmationModal().exists()).toBe(false)
  })
  test('clicking on board delete button opens confirmation modal, on confirm the board gets deleted from store and then the modal gets closed', async () => {
    const id = boardStore.currentBoard?.id
    await findDeleteBtn().trigger('click')
    expect(findConfirmationModal().exists()).toBe(true)
    await findConfirmationModal().vm.$emit('confirm')
    expect(boardStore.boards.length).toBe(fake_boards.length - 1)
    expect(boardStore.boards.find(b => b.id === id)).toBeUndefined()
    expect(findConfirmationModal().exists()).toBe(false)
  })
})

describe('add board button and board modal', () => {
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.boards = [...fake_boards]
    setCurrentBoard()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })

  test('show add board modal on add board plus button click', async () => {    
    expect(findBoardModal().exists()).toBe(false)    
    await findAddBoardBtn().trigger('click')
    expect(findBoardModal().exists()).toBe(true)
  })

  test('on emitting closeModal event from an open Board Modal closes the board modal', async () => {
    await findAddBoardBtn().trigger('click')
    expect(findBoardModal().exists()).toBe(true)
    
    await findBoardModal().vm.$emit('closeModal')
    expect(findBoardModal().exists()).toBe(false)
  })
})