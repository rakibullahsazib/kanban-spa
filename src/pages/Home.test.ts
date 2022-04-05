import { expect, test, describe, beforeEach, afterEach, fn } from "vitest";
import { mount, VueWrapper } from '@vue/test-utils'
import Home from './Home.vue'
import HomeSidebarSlider from '../components/page-sections/home/HomeHeader.vue';
import HomeHeader from '../components/page-sections/home/HomeSidebarSlider.vue';
import StageColumn from '../components/page-sections/home/StageColumn.vue';
import StageColumnHeader from '../components/page-sections/home/StageColumnHeader.vue';
import BoardModal from '@/components/modals/BoardModal.vue'
import { useBoardStore } from '../store/boardStore'
import { getMaxOrder } from '../helpers/arrayMethods'
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from "vue";
import { fake_boards, fake_currentBoard } from "../fakeData/board.fake";

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
const findHomeSidebarSlider = () => wrapper.findComponent(HomeSidebarSlider)
const findHomeHeader = () => wrapper.findComponent(HomeHeader)
const findBoardModal = () => wrapper.findComponent(BoardModal)
const findStageColumnHeaders = () => wrapper.findAllComponents(StageColumnHeader)
const findStageColumns = () => wrapper.findAllComponents(StageColumn)

describe('add board button', () => {
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })

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

describe('components exists with correct props', () => {
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.boards = fake_boards
    boardStore.currentBoard = fake_currentBoard
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  test('HomeSidebarSlider should exist', () => {
    expect(findHomeSidebarSlider().exists()).toBe(true)
  })
  test('HomeHeader should exist', () => {
    expect(findHomeHeader().exists()).toBe(true)
  })
  test('All StageColumnHeaders should exist with resepective stages passed as props', () => {
    const noOfStages = boardStore.currentBoard?.stages.length || 0
    for(var i = 0; i < noOfStages; i++) {
      expect(findStageColumnHeaders()[i].exists()).toBe(true)
      expect(findStageColumnHeaders()[i].props('stage')).toBeDefined()
      expect(findStageColumnHeaders()[i].props('stage')).toStrictEqual(boardStore.currentBoard?.stages[i])
    }
  })
  test('All StageColumns should exist with resepective stages passed as props', () => {
    const noOfStages = boardStore.currentBoard?.stages.length || 0
    for(var i = 0; i < noOfStages; i++) {
      expect(findStageColumns()[i].exists()).toBe(true)
      expect(findStageColumns()[i].props('stage')).toBeDefined()
      expect(findStageColumns()[i].props('stage')).toStrictEqual(boardStore.currentBoard?.stages[i])
    }
  })
})
