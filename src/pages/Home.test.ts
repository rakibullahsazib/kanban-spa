import { expect, test, describe, beforeEach, afterEach, fn } from "vitest";
import { mount, VueWrapper } from '@vue/test-utils'
import Home from './Home.vue'
import BoardModal from '@/components/modals/BoardModal.vue'
import { useBoardStore } from '../store/boardStore'
import { getMaxOrder } from '../helpers/arrayMethods'
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from "vue";
import { fake_currentBoard } from "../fakeData/board.fake";

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
  wrapper = mount(Home, {
    global: { 
      plugins: [ createTestingPinia({ createSpy: fn }) ] 
    }
  })
}
// helpers
const findAddBoardTextBtn = () => wrapper.find('[data-testid=add-board-text-btn]')
const findBoardModal = () => wrapper.findComponent(BoardModal)


describe('add board buttons', () => {
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })

  // test.only('playground', async () => {
  //   expect(findAddBoardTextBtn().exists()).toBe(true)    
  //   await findAddBoardTextBtn().trigger('click')    
  //   expect(findBoardModal().exists()).toBe(true)
  // })
  test('When there is no current board, show add board text btn', async () => {
    if (boardStore.boards.length) return
    expect(findAddBoardTextBtn().exists()).toBe(true)    
    await findAddBoardTextBtn().trigger('click')    
    expect(findBoardModal().exists()).toBe(true)
  })
  test('show add board modal on add board text button click', async () => {
    if (boardStore.boards.length) return
    expect(findAddBoardTextBtn().exists()).toBe(true)    
    await findAddBoardTextBtn().trigger('click')    
    expect(findBoardModal().exists()).toBe(true)
  })
})
