import { expect, test, describe, beforeEach, afterEach, fn } from "vitest";
import TaskModal from './TaskModal.vue'
import TextInput from '../inputs/text-inputs/TextInput.vue';
import Textarea from '../inputs/text-inputs/Textarea.vue';
import SelectedColorPicker from '../inputs/color-picker/SelectedColorPicker.vue';
import SingleSelectDropdown from '../inputs/dropdowns/SingleSelectDropdown.vue';
import DatePicker from '../inputs/date-time/DatePicker.vue';
import Button from '../buttons/Button.vue';
import { mount, VueWrapper } from '@vue/test-utils'
import { useBoardStore } from '../../store/boardStore'
import { useRootStore } from "../../store/rootStore";
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from "vue";
import { fake_boards, fake_currentBoard, fake_taskStatuses } from "../../fakeData/board.fake";

let rootStore: ReturnType<typeof useRootStore>
let boardStore: ReturnType<typeof useBoardStore>
let wrapper: VueWrapper

// helpers
const findTaskNameInput = () => wrapper.findAllComponents(TextInput)[0]
const findTaskAssigneeInput = () => wrapper.findAllComponents(TextInput)[1]
const findTextareaInput = () => wrapper.findComponent(Textarea)
const findSelectedColorPicker = () => wrapper.findComponent(SelectedColorPicker)
const findStageDropdown = () => wrapper.findAllComponents(SingleSelectDropdown)[0]
const findStatusDropdown = () => wrapper.findAllComponents(SingleSelectDropdown)[1]
const findDatePicker = () => wrapper.findComponent(DatePicker)
const findBtn = () => wrapper.findComponent(Button)
const findCrossImg = () => wrapper.find(`[data-testid=cross-img]`)

describe('close modal events', () => {
  beforeEach(() => {
    wrapper = mount(TaskModal, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test('emit close modal on background click', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().closeModal).toBeTruthy()
  })
  test('emit close modal on cross img click', async () => {
    await findCrossImg().trigger('click')
    expect(wrapper.emitted().closeModal).toBeTruthy()
  })
})

describe('Case: Add task, components exists and props are passed correctly initially', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
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
    boardStore.$reset()
    wrapper.unmount()
  })
  // Text Input - Task name
  test('Task Name TextInput component exists', async () => {
    expect(findTaskNameInput().exists()).toBe(true)
  })
  // Text Input - Task Assignee
  test('Task Assignee TextInput component exists', async () => {
    expect(findTaskAssigneeInput().exists()).toBe(true)
  })
  // Textarea component
  test('Textarea component exists', async () => {
    expect(findTextareaInput().exists()).toBe(true)
  })
  // SelectedColorPicker component
  test('SelectedColorPicker component exists', async () => {
    expect(findSelectedColorPicker().exists()).toBe(true)
  })
  // SingleSelectDropdown -Stage
  test('SingleSelectDropdown component for stages exists', async () => {
    expect(findStageDropdown().exists()).toBe(true)
    expect(findStageDropdown().props('label')).toBe('Stage')
    expect(findStageDropdown().props('options')).toStrictEqual(boardStore.currentBoard?.stages)
  })
  // SingleSelectDropdown - Status
  test('SingleSelectDropdown component for stages exists', async () => {
    expect(findStatusDropdown().exists()).toBe(true)
    expect(findStatusDropdown().props('label')).toBe('Status')
    expect(findStatusDropdown().props('options')).toStrictEqual(boardStore.taskStatuses)
  })
  // DatePicker component
  test('DatePicker component exists', async () => {
    expect(findDatePicker().exists()).toBe(true)
  })
  // Add btn
  test('button component exists', async () => {
    expect(findBtn().exists()).toBe(true)
  })
  test('Btn title is Add Task', async () => {
    await nextTick()
    expect(findBtn().props('title')).toBe('Add Task')
  })
})

describe('Case: Add Task, Task name TextInput input events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
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
    findTaskNameInput().vm.$emit('inputChange', 'test input')
    expect(findTaskNameInput().emitted().inputChange).toBeTruthy()
    expect(findTaskNameInput().emitted().inputChange[0]).toEqual(['test input'])
  })
  test('pass error message as props to TextInput when taskName is empty', async () => {
    findTaskNameInput().vm.$emit('inputChange', '')
    await nextTick()
    expect(findTaskNameInput().props('errorMessage')).not.toBe('')
  })
  test('pass error message as props to TextInput when task name already exists in the current board', async () => {
    boardStore.currentBoard = fake_currentBoard
    await nextTick()
    findTaskNameInput().vm.$emit('inputChange', 'Backlog Task 1')
    await nextTick()
    expect(findTaskNameInput().props('errorMessage')).not.toBe('')
  })
})

describe('Case: Add Task, Task Assignee TextInput component events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.currentBoard = fake_currentBoard
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  test('Textarea component emits event', async () => {
    findTaskAssigneeInput().vm.$emit('inputChange', 'test input')
    expect(findTaskAssigneeInput().emitted().inputChange).toBeTruthy()
    expect(findTaskAssigneeInput().emitted().inputChange[0]).toEqual(['test input'])
  })
})

describe('Case: Add Task, Task Description TextArea component events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    boardStore.currentBoard = fake_currentBoard
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

describe('Case: Add Task, DatePicker component events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    rootStore = useRootStore()
    boardStore = useBoardStore()
    boardStore.currentBoard = fake_currentBoard
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })

  test('on emitting toggle event change root store current dropdown and toggle isDropdownShown prop', async () => {
    expect(rootStore.currentDropdown).toBe('')
    expect(findDatePicker().props('isDropdownShown')).toBe(false)
    await findDatePicker().vm.$emit('toggle')
    expect(findDatePicker().emitted().toggle).toBeTruthy()

    expect(rootStore.currentDropdown).toBe('task-due-date')
    expect(findDatePicker().props('isDropdownShown')).toBe(true)
    await findDatePicker().vm.$emit('toggle')
    expect(findDatePicker().emitted().toggle).toBeTruthy()

    expect(rootStore.currentDropdown).toBe('')
    expect(findDatePicker().props('isDropdownShown')).toBe(false)
  })

  test('Textarea component emits event', async () => {
    await findDatePicker().vm.$emit('toggle', '2011-10-05T14:48:00.000Z')
    expect(findDatePicker().emitted().toggle).toBeTruthy()
    expect(findDatePicker().emitted().toggle[0]).toEqual(['2011-10-05T14:48:00.000Z'])
  })
})

describe('Case: Add Task, Stage SingleSelectDropdown component events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    rootStore = useRootStore()
    boardStore.currentBoard = fake_currentBoard
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  test('on emitting toggle event change root store current dropdown and toggle isDropdownShown prop', async () => {
    expect(rootStore.currentDropdown).toBe('')
    expect(findStageDropdown().props('isDropdownShown')).toBe(false)

    await findStageDropdown().vm.$emit('toggle')
    expect(findStageDropdown().emitted().toggle).toBeTruthy()
    

    expect(rootStore.currentDropdown).toBe('task-stage')
    expect(findStageDropdown().props('isDropdownShown')).toBe(true)
    await findStageDropdown().vm.$emit('toggle')
    expect(findStageDropdown().emitted().toggle).toBeTruthy()

    expect(rootStore.currentDropdown).toBe('')
    expect(findStageDropdown().props('isDropdownShown')).toBe(false)
  })
  test('on emitting optionClicked event : pass the emitted value, change root store current dropdown and toggle isDropdownShown prop', async () => {
    await findStageDropdown().vm.$emit('optionClicked', boardStore.currentBoard?.stages[1].id)
    expect(findStageDropdown().emitted().optionClicked).toBeTruthy()
    expect(findStageDropdown().emitted().optionClicked[0]).toEqual([boardStore.currentBoard?.stages[1].id])
  })
})

describe('Case: Add Task, Status SingleSelectDropdown component events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    rootStore = useRootStore()
    boardStore.currentBoard = fake_currentBoard
    boardStore.taskStatuses = fake_taskStatuses
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  test('on emitting toggle event change root store current dropdown and toggle isDropdownShown prop', async () => {
    expect(rootStore.currentDropdown).toBe('')
    expect(findStatusDropdown().props('isDropdownShown')).toBe(false)
    await findStatusDropdown().vm.$emit('toggle')
    expect(findStatusDropdown().emitted().toggle).toBeTruthy()

    expect(rootStore.currentDropdown).toBe('task-status')
    expect(findStatusDropdown().props('isDropdownShown')).toBe(true)
    await findStatusDropdown().vm.$emit('toggle')
    expect(findStatusDropdown().emitted().toggle).toBeTruthy()

    expect(rootStore.currentDropdown).toBe('')
    expect(findStatusDropdown().props('isDropdownShown')).toBe(false)
  })
  test('on emitting optionClicked event : pass the emitted value, change root store current dropdown and toggle isDropdownShown prop', async () => {
    await findStatusDropdown().vm.$emit('optionClicked', boardStore.taskStatuses[1].id)
    expect(findStatusDropdown().emitted().optionClicked).toBeTruthy()
    expect(findStatusDropdown().emitted().optionClicked[0]).toEqual([boardStore.taskStatuses[1].id])
  })
})

describe('Case: Add Task, Btn Component Events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
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
    boardStore.$reset()
    wrapper.unmount()
  })
  // error cases
  test('when task Name is empty, button should be disabled', async () => {
    await findTaskNameInput().vm.$emit('inputChange', '')
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when task name already exists, button should be disabled', async () => {
    await findTaskNameInput().vm.$emit('inputChange', fake_currentBoard.stages[0].tasks[0].name)
    expect(findTaskNameInput().props('errorMessage')).not.toBe('')
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when taskDueDate is empty, button should be disabled', async () => {
    await findDatePicker().vm.$emit('toggle', '')
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when taskStageId is empty, button should be disabled', async () => {
    await findStageDropdown().vm.$emit('optionClicked', '')
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when taskStatusId is empty, button should be disabled', async () => {
    await findStatusDropdown().vm.$emit('optionClicked', '')
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('on btn click add task to current board', async () => {
    const date = new Date().toISOString()
    findTaskNameInput().vm.$emit('inputChange', 'Task Name')
    findTaskAssigneeInput().vm.$emit('inputChange', 'Task Assignee')
    findTextareaInput().vm.$emit('inputChange', 'Task Description')
    findDatePicker().vm.$emit('toggle', date)
    findStageDropdown().vm.$emit('optionClicked', boardStore.currentBoard?.stages[0].id)
    findStatusDropdown().vm.$emit('optionClicked', boardStore.taskStatuses[0].id)
    await nextTick()

    findBtn().vm.$emit('click')
    expect(findBtn().emitted().click).toBeTruthy()

    await nextTick()
    const newTask = boardStore.currentBoard?.stages[0].tasks.find(t => t.name === 'Task Name')
    expect(newTask).toBeDefined()
    expect(newTask?.description).toBe('Task Description')
    expect(newTask?.assignee).toBe('Task Assignee')
    expect(newTask?.dueDate).toBe(date)
    expect(newTask?.stageId).toBe(boardStore.currentBoard?.stages[0].id)
    expect(newTask?.statusId).toBe(boardStore.taskStatuses[0].id)
    expect(wrapper.emitted().closeModal).toBeTruthy()
  })
})

describe('Case: Edit Task, Components exists and props are passed initially', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      props: {
        task: fake_currentBoard.stages[0].tasks[0]
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
    boardStore.$reset()
  })
  // Text Input - Task Name
  test('Task Name TextInput component exists', async () => {
    expect(findTaskNameInput().exists()).toBe(true)
  })
  test('name is passed as initial value prop into text input component', async () => {
    await nextTick()
    expect(findTaskNameInput().props('initialValue')).toBe('Backlog Task 1')
  })

  // Text Input - Task Assignee
  test('Task Assignee TextInput component exists', async () => {
    expect(findTaskAssigneeInput().exists()).toBe(true)
  })
  test('name is passed as initial value prop into text input component', async () => {
    await nextTick()
    expect(findTaskAssigneeInput().props('initialValue')).toBe('Assignee 1')
  })
  
  // Textarea component
  test('Textarea component exists', async () => {
    expect(findTextareaInput().exists()).toBe(true)
  })
  test('description is passed as initial value prop into Textarea component', async () => {
    await nextTick()
    expect(findTextareaInput().props('initialValue')).toBe('Backlog Task 1 Description')
  })
  // SelectedColorPicker component
  test('SelectedColorPicker component exists', async () => {
    expect(findSelectedColorPicker().exists()).toBe(true)
  })
  // SingleSelectDropdown -Stage
  test('SingleSelectDropdown component for stages exists', async () => {
    expect(findStageDropdown().exists()).toBe(true)
    expect(findStageDropdown().props('label')).toBe('Stage')
    expect(findStageDropdown().props('options')).toStrictEqual(boardStore.currentBoard?.stages)
    expect(findStageDropdown().props('selectedOptionId')).toBe('1')
  })
  // SingleSelectDropdown - Status
  test('SingleSelectDropdown component for stages exists', async () => {
    expect(findStatusDropdown().exists()).toBe(true)
    expect(findStatusDropdown().props('label')).toBe('Status')
    expect(findStatusDropdown().props('options')).toStrictEqual(boardStore.taskStatuses)
    expect(findStatusDropdown().props('selectedOptionId')).toBe('3')
  })
  // DatePicker component
  test('DatePicker component exists', async () => {
    expect(findDatePicker().exists()).toBe(true)
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

describe('Case: Edit Task, Task Name TextInput events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      props: {
        task: fake_currentBoard.stages[0].tasks[0]
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
  })
  afterEach(() => {
    wrapper.unmount()
    boardStore.$reset()
  })
  test('Text Input component emits event', async () => {
    findTaskNameInput().vm.$emit('inputChange', 'test input')
    expect(findTaskNameInput().emitted().inputChange).toBeTruthy()
    expect(findTaskNameInput().emitted().inputChange[0]).toEqual(['test input'])
  })
  test('pass error message as props to TextInput when taskName is empty', async () => {
    findTaskNameInput().vm.$emit('inputChange', '')
    await nextTick()
    expect(findTaskNameInput().props('errorMessage')).not.toBe('')
  })
  test('pass error message as props to TextInput when board name already exists', async () => {
    findTaskNameInput().vm.$emit('inputChange', 'Backlog Task 2')
    await nextTick()
    expect(findTaskNameInput().props('errorMessage')).not.toBe('')
  })
  test('do not pass error message as props to TextInput if the value is the same as current board being edited', async () => {
    // show error when name of another board is passed as input
    findTaskNameInput().vm.$emit('inputChange', 'Backlog Task 2')
    await nextTick()
    findTaskNameInput().vm.$emit('inputChange', 'Backlog Task 1')
    await nextTick()
    expect(findTaskNameInput().props('errorMessage')).toBe('')
  })
})

describe('Case: Edit Task, Task Assignee TextInput events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      props: {
        task: fake_currentBoard.stages[0].tasks[0]
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
  })
  afterEach(() => {
    wrapper.unmount()
    boardStore.$reset()
  })
  test('Textarea component emits event', async () => {
    findTaskAssigneeInput().vm.$emit('inputChange', 'test input')
    expect(findTaskAssigneeInput().emitted().inputChange).toBeTruthy()
    expect(findTaskAssigneeInput().emitted().inputChange[0]).toEqual(['test input'])
  })
})

describe('Case: Edit Task, Task Description Textarea events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      props: {
        task: fake_currentBoard.stages[0].tasks[0]
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

describe('Case: Edit Task, DatePicker component events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      props: {
        task: fake_currentBoard.stages[0].tasks[0]
      },
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    rootStore = useRootStore()
    boardStore = useBoardStore()
    boardStore.currentBoard = fake_currentBoard
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  test('task date should be passed as props', async () => {
    expect(findDatePicker().props('date')).toBe(fake_currentBoard.stages[0].tasks[0].dueDate)
  })
  test('on emitting toggle event change root store current dropdown and toggle isDropdownShown prop', async () => {
    expect(rootStore.currentDropdown).toBe('')
    expect(findDatePicker().props('isDropdownShown')).toBe(false)
    await findDatePicker().vm.$emit('toggle')
    expect(findDatePicker().emitted().toggle).toBeTruthy()

    expect(rootStore.currentDropdown).toBe('task-due-date')
    expect(findDatePicker().props('isDropdownShown')).toBe(true)
    await findDatePicker().vm.$emit('toggle')
    expect(findDatePicker().emitted().toggle).toBeTruthy()

    expect(rootStore.currentDropdown).toBe('')
    expect(findDatePicker().props('isDropdownShown')).toBe(false)
  })
  test('Textarea component emits event', async () => {
    await findDatePicker().vm.$emit('toggle', '2011-10-05T14:48:00.000Z')
    expect(findDatePicker().emitted().toggle).toBeTruthy()
    expect(findDatePicker().emitted().toggle[0]).toEqual(['2011-10-05T14:48:00.000Z'])
  })
})

describe('Case: Edit Task, Stage SingleSelectDropdown component events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      props: {
        task: fake_currentBoard.stages[0].tasks[0]
      },
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    rootStore = useRootStore()
    boardStore.currentBoard = fake_currentBoard
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  test('task stageId should be passed as props', async () => {
    expect(findStageDropdown().props('selectedOptionId')).toBe(fake_currentBoard.stages[0].tasks[0].stageId)
  })
  test('on emitting toggle event change root store current dropdown and toggle isDropdownShown prop', async () => {
    expect(rootStore.currentDropdown).toBe('')
    expect(findStageDropdown().props('isDropdownShown')).toBe(false)

    await findStageDropdown().vm.$emit('toggle')
    expect(findStageDropdown().emitted().toggle).toBeTruthy()
    

    expect(rootStore.currentDropdown).toBe('task-stage')
    expect(findStageDropdown().props('isDropdownShown')).toBe(true)
    await findStageDropdown().vm.$emit('toggle')
    expect(findStageDropdown().emitted().toggle).toBeTruthy()

    expect(rootStore.currentDropdown).toBe('')
    expect(findStageDropdown().props('isDropdownShown')).toBe(false)
  })
  test('on emitting optionClicked event : pass the emitted value, change root store current dropdown and toggle isDropdownShown prop', async () => {
    await findStageDropdown().vm.$emit('optionClicked', boardStore.currentBoard?.stages[1].id)
    expect(findStageDropdown().emitted().optionClicked).toBeTruthy()
    expect(findStageDropdown().emitted().optionClicked[0]).toEqual([boardStore.currentBoard?.stages[1].id])
  })
})

describe('Case: Edit Task, Status SingleSelectDropdown component events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      props: {
        task: fake_currentBoard.stages[0].tasks[0]
      },
      global: { 
        plugins: [ createTestingPinia({ createSpy: fn, stubActions: false }) ] 
      }
    })
  }
  beforeEach(() => {
    createWrapper()
    boardStore = useBoardStore()
    rootStore = useRootStore()
    boardStore.currentBoard = fake_currentBoard
    boardStore.taskStatuses = fake_taskStatuses
  })
  afterEach(() => {
    boardStore.$reset()
    wrapper.unmount()
  })
  test('task statusId should be passed as props', async () => {
    expect(findStatusDropdown().props('selectedOptionId')).toBe(fake_currentBoard.stages[0].tasks[0].statusId)
  })
  test('on emitting toggle event change root store current dropdown and toggle isDropdownShown prop', async () => {
    expect(rootStore.currentDropdown).toBe('')
    expect(findStatusDropdown().props('isDropdownShown')).toBe(false)
    await findStatusDropdown().vm.$emit('toggle')
    expect(findStatusDropdown().emitted().toggle).toBeTruthy()

    expect(rootStore.currentDropdown).toBe('task-status')
    expect(findStatusDropdown().props('isDropdownShown')).toBe(true)
    await findStatusDropdown().vm.$emit('toggle')
    expect(findStatusDropdown().emitted().toggle).toBeTruthy()

    expect(rootStore.currentDropdown).toBe('')
    expect(findStatusDropdown().props('isDropdownShown')).toBe(false)
  })
  test('on emitting optionClicked event : pass the emitted value, change root store current dropdown and toggle isDropdownShown prop', async () => {
    await findStatusDropdown().vm.$emit('optionClicked', boardStore.taskStatuses[1].id)
    expect(findStatusDropdown().emitted().optionClicked).toBeTruthy()
    expect(findStatusDropdown().emitted().optionClicked[0]).toEqual([boardStore.taskStatuses[1].id])
  })
})

describe.skip('Case: Edit Task, Btn component events', () => {
  const createWrapper = () => {
    wrapper = mount(TaskModal, {
      props: {
        task: fake_currentBoard.stages[0].tasks[0]
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
    boardStore.$reset()
  })
  // Task Name
  test('when task Name is empty, button should be disabled', async () => {
    await findTaskNameInput().vm.$emit('inputChange', '')
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when task name already exists and the name is not same as the current task name which is being edited, button should be disabled', async () => {
    await findTaskNameInput().vm.$emit('inputChange', fake_currentBoard.stages[0].tasks[1].name)
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when task name remains same, btn should be disabled', async () => {
    findTaskNameInput().vm.$emit('inputChange', 'Test')
    await nextTick()
    findTaskNameInput().vm.$emit('inputChange', fake_currentBoard.stages[0].tasks[0].name)
    await nextTick()
    expect(findBtn().props('disabled')).toBe(true)
  })
  // Task Description
  test('when description changes, btn should be active', async () => {
    await findTextareaInput().vm.$emit('inputChange', 'Changed Description')
    expect(findBtn().props('disabled')).toBe(false)
  })
  test('when description remains same, btn should be disabled', async () => {
    await findTextareaInput().vm.$emit('inputChange', 'Changed Description')
    await findTextareaInput().vm.$emit('inputChange', fake_currentBoard.stages[0].tasks[0].description)
    expect(findBtn().props('disabled')).toBe(false)
  })
  // Task Assignee
  test('when assignee changes, btn should be active', async () => {
    await findTaskAssigneeInput().vm.$emit('inputChange', 'Changed Assignee')
    expect(findBtn().props('disabled')).toBe(false)
  })
  test('when assignee remains same, btn should be disabled', async () => {
    await findTaskAssigneeInput().vm.$emit('inputChange', 'Changed Assignee')
    await findTaskAssigneeInput().vm.$emit('inputChange', fake_currentBoard.stages[0].tasks[0].assignee)
    expect(findBtn().props('disabled')).toBe(false)
  })
  // Task Due Date
  test('when taskDueDate is empty, button should be disabled', async () => {
    await findDatePicker().vm.$emit('toggle', '')
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when taskDueDate changes, button should be active', async () => {
    await findDatePicker().vm.$emit('toggle', '2011-10-05T14:48:00.000Z')
    expect(findBtn().props('disabled')).toBe(false)
  })
  test('when taskDueDate remains same, button should be disabled', async () => {
    await findDatePicker().vm.$emit('toggle', '2011-10-05T14:48:00.000Z')
    await findDatePicker().vm.$emit('toggle', fake_currentBoard.stages[0].tasks[0].dueDate)
    expect(findBtn().props('disabled')).toBe(true)
  })
  // Task Stage Id
  test('when taskStageId is empty, button should be disabled', async () => {
    await findStageDropdown().vm.$emit('optionClicked', '')
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when taskStageId changes, button should be active', async () => {
    await findStageDropdown().vm.$emit('optionClicked', '2')
    expect(findBtn().props('disabled')).toBe(false)
  })
  test('when taskStageId remains same, button should be disabled', async () => {
    await findStageDropdown().vm.$emit('optionClicked', '2')
    await findStageDropdown().vm.$emit('optionClicked', fake_currentBoard.stages[0].tasks[0].stageId)
    expect(findBtn().props('disabled')).toBe(true)
  })
  // Task Status Id
  test('when taskStatusId is empty, button should be disabled', async () => {
    await findStatusDropdown().vm.$emit('optionClicked', '')
    expect(findBtn().props('disabled')).toBe(true)
  })
  test('when taskStatusId changes, button should be active', async () => {
    await findStatusDropdown().vm.$emit('optionClicked', '2')
    expect(findBtn().props('disabled')).toBe(false)
  })
  test('when taskStatusId remains same, button should be disabled', async () => {
    await findStatusDropdown().vm.$emit('optionClicked', '2')
    await findStatusDropdown().vm.$emit('optionClicked', fake_currentBoard.stages[0].tasks[0].statusId)
    expect(findBtn().props('disabled')).toBe(true)
  })
  // Save changes
  test('on btn click save changes to the task', async () => {
    const date = new Date().toISOString()
    findTaskNameInput().vm.$emit('inputChange', 'Task Name')
    findTaskAssigneeInput().vm.$emit('inputChange', 'Task Assignee')
    findTextareaInput().vm.$emit('inputChange', 'Task Description')
    findDatePicker().vm.$emit('toggle', date)
    findStageDropdown().vm.$emit('optionClicked', fake_currentBoard.stages[1].id)
    findStatusDropdown().vm.$emit('optionClicked', fake_taskStatuses[1].id)
    await nextTick()

    findBtn().vm.$emit('click')
    expect(findBtn().emitted().click).toBeTruthy()

    await nextTick()

    expect(boardStore.currentBoard?.stages[0].tasks.find(t => t.name === fake_currentBoard.stages[0].tasks[0].name)).toBeUndefined()
    const editedTask = boardStore.currentBoard?.stages[0].tasks.find(t => t.name === 'Task Name')
    expect(editedTask).toBeDefined()
    expect(editedTask?.description).toBe('Task Description')
    expect(editedTask?.assignee).toBe('Task Assignee')
    expect(editedTask?.dueDate).toBe(date)
    expect(editedTask?.stageId).toBe(fake_currentBoard.stages[1].id)
    expect(editedTask?.statusId).toBe(fake_taskStatuses[1].id)
    expect(wrapper.emitted().closeModal).toBeTruthy()
  })
})
