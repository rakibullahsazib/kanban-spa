import { expect, test, beforeAll, describe, beforeEach, afterEach, fn } from "vitest";
import {render, screen, fireEvent, RenderResult} from '@testing-library/vue'
import HomeSidebarSlider from '../HomeSidebarSlider.vue'
import HeaderAddButton from '../../../buttons/HeaderAddButton.vue'
import { mount } from "@vue/test-utils"
import { useBoardStore } from '../../../../store/board'
import { getMaxOrder } from '../../../../helpers/arrayMethods'
import { createTestingPinia } from '@pinia/testing'

let boardStore: ReturnType<typeof useBoardStore>  
const createBoard = () => {
  const maxOrder = getMaxOrder(boardStore.boards)
  boardStore.addBoard({
    name: 'Test Board',
    description: 'Test Board Description',
    order: maxOrder + 1
  })
  // return boardStore.boards[boardStore.boards.length - 1].id
}

describe('add board buttons', () => {
  let homeSidebarSlider: RenderResult
  beforeEach(() => {
    homeSidebarSlider = render(HomeSidebarSlider, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn }) ] 
      }
    })
    boardStore = useBoardStore()
  })
  afterEach(() => {
    boardStore.$reset()
  })

  test('When there are no boards, show add board modal on add board text button click', async () => {
    
    expect(boardStore.boards).toStrictEqual([])

    const addBoardTextBtn =  homeSidebarSlider.getByTestId('add-board-text-btn')
  
    await fireEvent.click(addBoardTextBtn)
    homeSidebarSlider.getByTestId('add-board-modal')
  })

  test('When there is a board, The add board text button should not be there', async () => {
    createBoard()
    expect(boardStore.boards.length).toBe(1)

    expect(homeSidebarSlider.queryByTestId('add-board-text-btn')).toBeUndefined()
  })

  // test('show add board modal on add board plus button click', async () => {

  //   const headerBtn = render(HeaderAddButton, {
  //     props: {
  //       title: 'Board'
  //     }
  //   })
  //   const addBtn = headerBtn.getByTestId('Board-add-btn')
  //   await fireEvent.click(addBtn)

  //   console.log(headerBtn.emitted())

  //   // const addBoardBtn =  screen.getByTestId('add-board-text-btn')
  
  //   // await fireEvent.click(addBoardTextBtn)
  //   homeSidebarSlider.getByTestId('add-board-modal')
  // })
})
