import { expect, test, describe, beforeEach, afterEach, fn } from "vitest";
import { mount, VueWrapper } from '@vue/test-utils'
import { useBoardStore } from '../../../store/boardStore'
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from "vue";
import { fake_currentBoard } from "../../../fakeData/board.fake";
import StageColumn from './StageColumn.vue'
import ConfirmationModal from '../../modals/ConfirmationModal.vue'
import TaskModal from '../../modals/TaskModal.vue'
import ButtonWithIcon from '../../buttons/ButtonWithIcon.vue'
import TaskCard from './TaskCard.vue'

let boardStore: ReturnType<typeof useBoardStore>
let wrapper: VueWrapper

// helpers
const findStageName = () => wrapper.find('[data-testid=stage-name]')
const findMoveBtn = () => wrapper.find('[data-testid=move-stage-btn]')
const findDeleteBtn = () => wrapper.find('[data-testid=delete-stage-btn]')
const findAddBtn = () => wrapper.find('[data-testid=add-stage-btn]')
const findConfirmationModal = () => wrapper.findComponent(ConfirmationModal)
const findTaskModal = () => wrapper.findComponent(TaskModal)
const findButtonWithIcon = () => wrapper.findComponent(ButtonWithIcon)
const findTaskCards = () => wrapper.findAllComponents(TaskCard)

describe('test for all stages', () => {
  const createWrapper = () => {
    wrapper = mount(StageColumn, {
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
  test('all task card item should be rendered properly', async() => {
    const noOfTasks = boardStore.currentBoard?.stages[0].tasks.length || 0
    const taskCards = findTaskCards()
    expect(taskCards.length).toBe(noOfTasks)
    for (let i = 0; i < noOfTasks; i++) {
      expect(taskCards[i].props('task')).toBeDefined()
      expect(taskCards[i].props('task').name).toBeDefined()
      expect(taskCards[i].props('task')).toStrictEqual(boardStore.currentBoard?.stages[0].tasks[i])
    }
  })
  test('when task card emits edit event, TaskModal should be shown with that task in prop', async() => {
    expect(findTaskModal().exists()).toBe(false)

    expect(findTaskCards().length).toBeGreaterThan(0)
    findTaskCards()[0].vm.$emit('edit')
    expect(findTaskCards()[0].emitted().edit).toBeTruthy()
    
    await nextTick()
    expect(findTaskModal().exists()).toBe(true)
    expect(findTaskModal().props('task')).toBeDefined()
    expect(findTaskModal().props('task')).toStrictEqual(boardStore.currentBoard?.stages[0].tasks[0])
  })

  test('when task card emits delete event, show confirmation modal', async () => {
    expect(findConfirmationModal().exists()).toBe(false)

    expect(findTaskCards().length).toBeGreaterThan(0)
    findTaskCards()[0].vm.$emit('delete')
    expect(findTaskCards()[0].emitted().delete).toBeTruthy()

    await nextTick()
    expect(findConfirmationModal().exists()).toBe(true)
  })
  test('when task card emits delete event and confirmation modal emits confirm event, the modal should be closed and the task should be deleted', async () => {
    // initial state
    const noOfTasksBefore = boardStore.currentBoard?.stages[0].tasks.length || -1
    expect(findConfirmationModal().exists()).toBe(false)

    // emit delete event from task card
    expect(findTaskCards().length).toBeGreaterThan(0)
    findTaskCards()[0].vm.$emit('delete')
    expect(findTaskCards()[0].emitted().delete).toBeTruthy()

    // task to be deleted is defined and confirmation modal should pop up
    const taskToBeDeleted = findTaskCards()[0].props('task').id
    expect(boardStore.currentBoard?.stages[0].tasks.find(t => t.id === taskToBeDeleted)).toBeDefined()

    await nextTick()
    expect(findConfirmationModal().exists()).toBe(true)

    // on confirming the task should be deleted from store
    findConfirmationModal().vm.$emit('confirm')
    expect(findConfirmationModal().emitted().confirm).toBeTruthy()
    await nextTick()
    expect(findConfirmationModal().exists()).toBe(false)

    expect(boardStore.currentBoard?.stages[0].tasks.length).toBe(noOfTasksBefore - 1)
    expect(boardStore.currentBoard?.stages[0].tasks.find(t => t.id === taskToBeDeleted)).toBeUndefined()
  })
  test('when confirmation modal emits closeModal event, the modal should be closed', async () => {
    // emit delete event from task card
    expect(findTaskCards().length).toBeGreaterThan(0)
    findTaskCards()[0].vm.$emit('delete')
    expect(findTaskCards()[0].emitted().delete).toBeTruthy()
    await nextTick()

    // confirmation modal should pop up
    expect(findConfirmationModal().exists()).toBe(true)
    findConfirmationModal().vm.$emit('closeModal')
    // emit closeModal event from confirmation modal
    expect(findConfirmationModal().emitted().closeModal).toBeTruthy()
    await nextTick()

    expect(findConfirmationModal().exists()).toBe(false)
  })
  
})
describe('tests for backlog stage only', () => {
  const createWrapper = () => {
    wrapper = mount(StageColumn, {
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
  test('ButtonWithIcon for adding task should exist', async() => {
    expect(findButtonWithIcon().exists()).toBe(true)
  })
  test('on ButtonWithIcon click, task modal should be shown but with no task prop', async() => {
    expect(findTaskModal().exists()).toBe(false)

    await findButtonWithIcon().trigger('click')
    expect(findTaskModal().exists()).toBe(true)
    expect(findTaskModal().props('task')).toBe(undefined)
  })
})
describe('tests only for stages other than backlog stage', () => {
  const createWrapper = () => {
    wrapper = mount(StageColumn, {
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
  test('prop stage should be defined', async() => {
    expect(wrapper.props('stage')).toBeDefined()
  })
  test('the stage name in props should not be backlog', async() => {
    expect(wrapper.props('stage').name).not.toBe('Backlog')
  })
  test('ButtonWithIcon for adding task should not exist', async() => {
    expect(findButtonWithIcon().exists()).not.toBe(true)
  })
})