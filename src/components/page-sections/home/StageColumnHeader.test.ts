import { expect, test, describe, beforeEach, afterEach, fn } from "vitest";
import StageColumnHeader from './StageColumnHeader.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { useBoardStore } from '../../../store/boardStore'
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from "vue";
import { fake_currentBoard } from "../../../fakeData/board.fake";
import ConfirmationModal from '../../modals/ConfirmationModal.vue'

let boardStore: ReturnType<typeof useBoardStore>
let wrapper: VueWrapper

// helpers
const findStageName = () => wrapper.find('[data-testid=stage-name]')
const findMoveBtn = () => wrapper.find('[data-testid=move-stage-btn]')
const findDeleteBtn = () => wrapper.find('[data-testid=delete-stage-btn]')
const findAddBtn = () => wrapper.find('[data-testid=add-stage-btn]')
const findConfirmationModal = () => wrapper.findComponent(ConfirmationModal)

describe('Backlog stage', () => {
  const createWrapper = () => {
    wrapper = mount(StageColumnHeader, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      },
      props: {
        stage: fake_currentBoard.stages[0]
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.currentBoard = fake_currentBoard
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test('the stage name in props should be backlog', async() => {
    expect(wrapper.props('stage').name).toBe('Backlog')
  })
  test('stage name should exist and stage name should be Backlog', async () => {
    expect(findStageName().exists()).toBe(true)
    expect(findStageName().text()).toBe('Backlog')
  })
  test('move stage btn should not exist', async () => {
    expect(findMoveBtn().exists()).toBe(false)
  })
  test('delete stage btn should not exist', async () => {
    expect(findDeleteBtn().exists()).toBe(false)
  })
  test('delete stage btn should not exist', async () => {
    expect(findDeleteBtn().exists()).toBe(false)
  })
  test('confirmation modal should not exist', async () => {
    expect(findConfirmationModal().exists()).toBe(false)
  })
  test('add stage btn should not exist', async () => {
    expect(findAddBtn().exists()).toBe(true)
  })
  test('on add stage btn click, emit addStage event', async () => {
    await findAddBtn().trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})

describe('Any other stage than Backlog', () => {
  const createWrapper = () => {
    wrapper = mount(StageColumnHeader, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      },
      props: {
        stage: fake_currentBoard.stages[1]
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.currentBoard = fake_currentBoard
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test('the stage name in props should not be backlog', async() => {
    expect(wrapper.props('stage').name).not.toBe('Backlog')
  })
  test('stage name should exist and stage name should be rendered properly', async () => {
    expect(findStageName().exists()).toBe(true)
    expect(findStageName().text()).toBe(boardStore.currentBoard?.stages[1].name)
  })
  test('move stage btn should exist', async () => {
    expect(findMoveBtn().exists()).toBe(true)
  })
  test('delete stage btn should exist', async () => {
    expect(findDeleteBtn().exists()).toBe(true)
  })
  test('delete stage btn should exist', async () => {
    expect(findDeleteBtn().exists()).toBe(true)
  })
  test('on delete btn click, show confirmation modal', async () => {
    await findDeleteBtn().trigger('click')
    expect(findConfirmationModal().exists()).toBe(true)
  })
  test('when confirmation modal emits closeModal event, the modal should be closed', async () => {
    await findDeleteBtn().trigger('click')
    expect(findConfirmationModal().exists()).toBe(true)
    findConfirmationModal().vm.$emit('closeModal')
    expect(findConfirmationModal().emitted().closeModal).toBeTruthy()
    await nextTick()
    expect(findConfirmationModal().exists()).toBe(false)
  })
  test('when confirmation modal emits confirm event, the modal should be closed and the stage should be deleted', async () => {
    const noOfStagesBefore = boardStore.currentBoard?.stages.length || -1
    const stageToBeDeleted = boardStore.currentBoard?.stages[1].id
    expect(boardStore.currentBoard?.stages.find(s => s.id === stageToBeDeleted)).toBeDefined()

    await findDeleteBtn().trigger('click')
    expect(findConfirmationModal().exists()).toBe(true)
    findConfirmationModal().vm.$emit('confirm')
    expect(findConfirmationModal().emitted().confirm).toBeTruthy()
    await nextTick()
    expect(findConfirmationModal().exists()).toBe(false)

    expect(boardStore.currentBoard?.stages.length).toBe(noOfStagesBefore - 1)
    expect(boardStore.currentBoard?.stages.find(s => s.id === stageToBeDeleted)).toBeUndefined()
  })
  test('add stage btn should not exist', async () => {
    expect(findAddBtn().exists()).toBe(true)
  })
  test('on add stage btn click, emit addStage event', async () => {
    await findAddBtn().trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})