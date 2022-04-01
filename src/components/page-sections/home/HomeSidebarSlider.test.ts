import { expect, test, describe, beforeEach, afterEach, fn } from "vitest";
import HomeSidebarSlider from './HomeSidebarSlider.vue'
import HeaderAddButton from '../../buttons/HeaderAddButton.vue'
import BoardModal from '../../modals/BoardModal.vue'
import ConfirmationModal from '../../modals/ConfirmationModal.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { useBoardStore } from '../../../store/boardStore'
import { getMaxOrder } from '../../../helpers/arrayMethods'
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from "vue";
import { fake_boards } from "../../../fakeData/board.fake";

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
// render factory
let wrapper: VueWrapper
const createWrapper = () => {
  wrapper = mount(HomeSidebarSlider, {
    global: { 
      plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
    }
  })
}
// helpers
const findAddBoardTextBtn = () => wrapper.find('[data-testid=add-board-text-btn]')
const findBoardModal = () => wrapper.findComponent(BoardModal)
const findConfirmationModal = () => wrapper.findComponent(ConfirmationModal)
const findBoardById = (id: string) => wrapper.find(`[data-testid=board_${id}]`)
const findBoardEditButtonByBoardId = (id: string) => wrapper.find(`[data-testid=board_${id}_edit]`)
const findBoardDeleteButtonByBoardId = (id: string) => wrapper.find(`[data-testid=board_${id}_delete]`)


describe('add board buttons', () => {
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })

  test('When there are no boards, show add board modal on add board text button click', async () => {
    expect(findBoardModal().exists()).toBe(false)
    expect(boardStore.boards).toStrictEqual([])
    
    await findAddBoardTextBtn().trigger('click')
    await nextTick()
    
    expect(findBoardModal().exists()).toBe(true)
  })

  test('show add board modal on add board plus button click', async () => {
    
    expect(findBoardModal().exists()).toBe(false)
    
    const headerBtn = wrapper.findComponent(HeaderAddButton)
    headerBtn.vm.$emit('add')
    expect(headerBtn.emitted().add).toBeTruthy
    await nextTick()

    expect(findBoardModal().exists()).toBe(true)
  })

  test('When a board is added, The add board text button disappears', async () => {
    expect(findAddBoardTextBtn().exists()).toBe(true)
    createBoard()
    await nextTick()
    expect(findAddBoardTextBtn().exists()).toBe(false)
  })
})
describe('board list', () => {
  beforeEach(async () => {
    createWrapper()
    boardStore = useBoardStore()
    expect(boardStore.boards).toStrictEqual([])

    // intialize board Store with boards
    boardStore.boards = [...fake_boards]
    expect(boardStore.boards.length).toBe(fake_boards.length)
    await nextTick()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })

  test('board list have the boards from store and respective edit and delete buttons', async () => {    
    for(let i = 0; i < boardStore.boards.length; i++) {
      expect(findBoardById(boardStore.boards[i].id).exists()).toBe(true)
      expect(findBoardEditButtonByBoardId(boardStore.boards[i].id).exists()).toBe(true)
      expect(findBoardDeleteButtonByBoardId(boardStore.boards[i].id).exists()).toBe(true)
    }
  })
  test('boards are listed from high order to low', async () => {    
    for(let i = 0; i < boardStore.boards.length; i++) {
      expect(findBoardById(boardStore.boards[i].id).exists()).toBe(true)
      expect(findBoardEditButtonByBoardId(boardStore.boards[i].id).exists()).toBe(true)
      expect(findBoardDeleteButtonByBoardId(boardStore.boards[i].id).exists()).toBe(true)
    }
  })
  test('clicking on board sets it as current board in the store', async () => {
    for(let i = 0; i < boardStore.boards.length; i++) {
      await findBoardById(boardStore.boards[i].id).trigger('click')
      expect(boardStore.currentBoard?.id).toBe(boardStore.boards[i].id)
    }
  })
  test('clicking on board edit button opens up add/edit board modal', async () => {
    await findBoardEditButtonByBoardId(boardStore.boards[0].id).trigger('click')
    expect(findBoardModal().exists()).toBe(true)
  })
  test('opened boards modal emits closeModal and it gets closed', async () => {
    await findBoardEditButtonByBoardId(boardStore.boards[0].id).trigger('click')
    expect(findBoardModal().exists()).toBe(true)
    await findBoardModal().vm.$emit('closeModal')
    expect(findBoardModal().exists()).toBe(false)
  })

  test('clicking on board delete button opens up confirmation modal', async () => {
    await findBoardDeleteButtonByBoardId(boardStore.boards[0].id).trigger('click')
    expect(findConfirmationModal().exists()).toBe(true)
  })
  test('opened confirmation modal emits closeModal and it gets closed', async () => {
    await findBoardDeleteButtonByBoardId(boardStore.boards[0].id).trigger('click')
    expect(findConfirmationModal().exists()).toBe(true)
    await findConfirmationModal().vm.$emit('closeModal')
    expect(findConfirmationModal().exists()).toBe(false)
  })
  test('clicking on board delete button opens confirmation modal, on confirm the board gets deleted from store and then the modal gets closed', async () => {
    const id = fake_boards[1].id
    await findBoardDeleteButtonByBoardId(id).trigger('click')
    expect(findConfirmationModal().exists()).toBe(true)
    await findConfirmationModal().vm.$emit('confirm')
    expect(boardStore.boards.length).toBe(fake_boards.length - 1)
    expect(boardStore.boards.find(b => b.id === id)).toBeUndefined()
    expect(findBoardById(id).exists()).toBe(false)
    expect(findConfirmationModal().exists()).toBe(false)
  })
})
