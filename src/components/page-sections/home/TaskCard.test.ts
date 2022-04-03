import { mount, VueWrapper } from "@vue/test-utils";
import { describe, test, beforeEach, afterEach, fn } from "vitest";
import { fake_currentBoard, fake_taskStatuses } from "../../../fakeData/board.fake";
import TaskCard from './TaskCard.vue'
import { useBoardStore } from '../../../store/boardStore'
import { createTestingPinia } from '@pinia/testing'
import { getInitials } from "../../../helpers/stringMethods";
import { getDateMonthYearFromISO } from "../../../helpers/dateFormatter";

let wrapper: VueWrapper
let boardStore: ReturnType<typeof useBoardStore>

const findDeleteBtn = () => wrapper.find('[data-testid=task-delete]')
const findTaskName = () => wrapper.find('[data-testid=task-name]')
const findTaskStatusIcon = () => wrapper.find('[data-testid=task-status-icon]')
const findTaskAssigneeInitials = () => wrapper.find('[data-testid=task-assignee-initials]')
const findTaskAssigneeInitialsAbsence = () => wrapper.find('[data-testid=task-assignee-initials-absence]')
const findTaskAssignee = () => wrapper.find('[data-testid=task-assignee]')
const findTaskNotAssigned = () => wrapper.find('[data-testid=task-not-assigned]')
const findTaskDueDate = () => wrapper.find('[data-testid=task-dueDate]')

describe('Componenent renders correctly when task is assigned to someone', () => {
  const task = fake_currentBoard.stages[0].tasks[0] // task with assignee
  const createWrapper = () => {
    wrapper = mount(TaskCard, {
      props: {
        task: task
      },
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.currentBoard = fake_currentBoard
    boardStore.taskStatuses = fake_taskStatuses
  })
  afterEach(() => {
    wrapper.unmount()
  })
  
  test('task name appears correctly', async () => {
    expect(findTaskName().text()).toBe(task.name)
  })
  test('task status icon appears correctly', async () => {
    expect(findTaskStatusIcon().exists()).toBe(true)
    const status = fake_taskStatuses.find(s => s.id === task.statusId)
    expect(findTaskStatusIcon().attributes('src')).toContain(status?.icon)
  })
  test('task assignee appears correctly', async () => {
    expect(findTaskAssignee().text()).toBe(task.assignee)
  })
  test('task not assigned should not exist', async () => {
    expect(findTaskNotAssigned().exists()).toBe(false)
  })
  test('task assignee initials appears correctly', async () => {
    expect(findTaskAssigneeInitials().text()).toBe(getInitials(task.assignee))
  })
  test('question mark on absence of task assignee should not exist', async () => {
    expect(findTaskAssigneeInitialsAbsence().exists()).toBe(false)
  })
  test('task due date appears correctly', async () => {
    expect(findTaskDueDate().text()).toContain(getDateMonthYearFromISO(task.dueDate))
  })
})

describe('Componenent renders correctly when task is assigned to someone', () => {
  const task = fake_currentBoard.stages[0].tasks[1]
  const createWrapper = () => {
    wrapper = mount(TaskCard, {
      props: {
        task: task
      },
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.currentBoard = fake_currentBoard
    boardStore.taskStatuses = fake_taskStatuses
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test('task assignee should not exist', async () => {
    expect(findTaskAssignee().exists()).toBe(false)
  })
  test('task not assigned should exist', async () => {
    expect(findTaskNotAssigned().exists()).toBe(true)
  })
  test('task assignee initials should not exist', async () => {
    expect(findTaskAssigneeInitials().exists()).toBe(false)
  })
  test('question mark on absence of task assignee should exist', async () => {
    expect(findTaskAssigneeInitialsAbsence().exists()).toBe(true)
    expect(findTaskAssigneeInitialsAbsence().text()).toBe('?')
  })
})

describe('Componenent events', () => {
  const task = fake_currentBoard.stages[0].tasks[0] // task with assignee
  const createWrapper = () => {
    wrapper = mount(TaskCard, {
      props: {
        task: task
      },
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.currentBoard = fake_currentBoard
    boardStore.taskStatuses = fake_taskStatuses
  })
  afterEach(() => {
    wrapper.unmount()
  })
  
  test('delete icon exists', async () => {
    expect(findDeleteBtn().exists()).toBe(true)
  })
  test('on delete icon click, emit delete event', async () => {
    await findDeleteBtn().trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
  })
  test('on clicking itself, emit edit event', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().edit).toBeTruthy()
  })
  test('on clicking anywhere except delete icon, emit edit event', async () => {
    await findTaskName().trigger('click')
    expect(wrapper.emitted().edit).toBeTruthy()
  })
})