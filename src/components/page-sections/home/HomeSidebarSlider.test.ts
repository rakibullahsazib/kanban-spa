import { expect, test, describe, beforeEach, afterEach, fn } from "vitest";
import HomeSidebarSlider from './HomeSidebarSlider.vue'
import HeaderAddButton from '../../buttons/HeaderAddButton.vue'
import AddBoardModal from '../../modals/AddBoardModal.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { useBoardStore } from '../../../store/board'
import { getMaxOrder } from '../../../helpers/arrayMethods'
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from "vue";

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
const findAddBoardModal = () => wrapper.findComponent(AddBoardModal)
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
    expect(findAddBoardModal().exists()).toBe(false)
    expect(boardStore.boards).toStrictEqual([])
    
    await findAddBoardTextBtn().trigger('click')
    
    expect(findAddBoardModal().exists()).toBe(true)
  })

  test('show add board modal on add board plus button click', async () => {
    
    expect(findAddBoardModal().exists()).toBe(false)
    
    const headerBtn = wrapper.findComponent(HeaderAddButton)
    headerBtn.vm.$emit('add')
    expect(headerBtn.emitted().add).toBeTruthy
    await nextTick()

    expect(findAddBoardModal().exists()).toBe(true)
  })

  test('When a board is added, The add board text button disappears', async () => {
    expect(findAddBoardTextBtn().exists()).toBe(true)
    createBoard()
    await nextTick()
    expect(findAddBoardTextBtn().exists()).toBe(false)
  })
})
