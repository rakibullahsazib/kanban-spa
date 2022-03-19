import { setActivePinia, createPinia } from 'pinia'
import { afterEach, beforeAll, beforeEach, describe, expect, test } from 'vitest'
import { useBoardStore } from '../board'
import { v4 as uuid, validate as uuidValidate } from 'uuid'
import { BoardBrief, StageDetail } from '../interface/board.interface'
import { TaskDetail } from '../interface/task.interface'

beforeAll(() => {
  setActivePinia(createPinia())
})
describe('Board CRUD operations', () => {
  let boardStore: ReturnType<typeof useBoardStore>  
  const createBoard = () => {
    boardStore.addBoard({
      name: 'Test Board',
      description: 'Test Board Description'
    })
    return boardStore.boards[boardStore.boards.length - 1].id
  }

  beforeEach(() => {
    boardStore = useBoardStore()
  })
  afterEach(() => {
    boardStore.$reset()
  })

  test('creates board store', () => {
    expect(boardStore).toBeDefined()
  })
  test('boards is empty initially', () => {
    expect(boardStore.boards).toStrictEqual([])
  })
  test('add a board', () => {
    createBoard()
    expect(boardStore.boards[boardStore.boards.length - 1]).toBeDefined()
    expect(boardStore.boards[boardStore.boards.length - 1].name).toBe('Test Board')
    expect(boardStore.boards[boardStore.boards.length - 1].description).toBe('Test Board Description')
  })
  test('update board name', () => {
    const boardId = createBoard()
    boardStore.updateBoard(boardId, {name : 'Updated Board Name'})
    const updatedBoard: BoardBrief | undefined = boardStore.boards.find((b) => b.id === boardId)
    expect(updatedBoard?.name).toBe('Updated Board Name')
  })
  test('update board description', () => {
    const boardId = createBoard()
    boardStore.updateBoard(boardId, {description : 'Updated Board Description'})
    const updatedBoard: BoardBrief | undefined = boardStore.boards.find((b) => b.id === boardId)
    expect(updatedBoard?.description).toBe('Updated Board Description')
  })
  test('set current board', () => {
    const boardId = createBoard()
    boardStore.setCurrentBoard(boardId)
    expect(boardStore.currentBoard).toBeDefined()
    expect(boardStore.currentBoard?.id).toBe(boardId)
  })
  test('update current board name & description', () => {
    const boardId = createBoard()
    boardStore.setCurrentBoard(boardId)
    boardStore.updateBoard(boardId, {name : 'Updated Board Name', description: 'Updated Board Description'})
    expect(boardStore.currentBoard?.name).toBe('Updated Board Name')
    expect(boardStore.currentBoard?.description).toBe('Updated Board Description')
  })
  test('delete a board', () => {
    const boardId1 = createBoard()
    const boardId2 = createBoard()
    boardStore.deleteBoard(boardId1)
    expect(boardStore.boards.length).toBe(1)
    expect(boardStore.boards[0].id).toBe(boardId2)
    boardStore.deleteBoard(boardId2)
    expect(boardStore.boards.length).toBe(0)
  })
})
describe('Board Stage CRUD operations', () => {
  let boardStore: ReturnType<typeof useBoardStore>  
  const createAndSetCurrentBoard = () => {
    boardStore.addBoard({
      name: 'Test Board',
      description: 'Test Board Description'
    })
    boardStore.setCurrentBoard(boardStore.boards[boardStore.boards.length - 1].id)
  }
  const addStage = () => {
    boardStore.addStage({
      name: 'Test Stage',
      order: 2
    })
    return boardStore.currentBoard?.stages[boardStore.currentBoard?.stages.length - 1].id
  }

  beforeEach(() => {
    boardStore = useBoardStore()
    createAndSetCurrentBoard()
  })
  afterEach(() => {
    boardStore.$reset()
  })

  test('after setting a new board as current board Backlog stage will be there initially', () => {
    expect(boardStore.currentBoard).toBeDefined()
    expect(boardStore.currentBoard?.stages).toBeDefined()
    const stages: StageDetail[] = boardStore.currentBoard?.stages !
    expect(stages.length).toBe(1)
    expect(stages[0].name).toBe('Backlog')
    expect(stages[0].order).toBe(1)
    expect(stages[0].tasks).toStrictEqual([])
  })
  test('add a stage to currentboard', () => {
    addStage()
    const stages: StageDetail[] = boardStore.currentBoard?.stages !
    expect(stages.length).toBe(2)
    expect(stages[stages.length - 1].name).toBe('Test Stage')
    expect(stages[stages.length - 1].order).toBe(2)
    expect(stages[stages.length - 1].tasks.length).toBe(0)
  })
  test('update stage name', () => {
    const stageId = addStage()!
    boardStore.updateStage(stageId, {name : 'Updated Stage Name'})
    const stages: StageDetail[] = boardStore.currentBoard?.stages !
    const updatedStage: StageDetail | undefined = stages.find((e) => e.id === stageId)
    expect(updatedStage?.name).toBe('Updated Stage Name')
  })
  test('update stage order', () => {
    const stageId = addStage()!
    boardStore.updateStage(stageId, {order : 3})
    const stages: StageDetail[] = boardStore.currentBoard?.stages !
    const updatedStage: StageDetail | undefined = stages.find((e) => e.id === stageId)
    expect(updatedStage?.order).toBe(3)
  })
  test('should not delete backlog stage', () => {
    const stages: StageDetail[] = boardStore.currentBoard?.stages !
    boardStore.deleteStage(stages[0].id)
    expect(stages.length).toBe(1)
  })
  test('delete a stage other than backlog', () => {
    const stageId2 = addStage()!
    const stageId3 = addStage()!
    const stages: StageDetail[] = boardStore.currentBoard?.stages !
    boardStore.deleteStage(stageId2)
    expect(stages.length).toBe(2)
    expect(stages[stages.length - 1].id).toBe(stageId3)
    boardStore.deleteStage(stageId3)
    expect(stages.length).toBe(1)
  })
})

describe('Board Task CRUD operations', () => {
  let boardStore: ReturnType<typeof useBoardStore>  
  const createAndSetCurrentBoard = () => {
    boardStore.addBoard({
      name: 'Test Board',
      description: 'Test Board Description'
    })
    boardStore.setCurrentBoard(boardStore.boards[boardStore.boards.length - 1].id)
    // current board already have a stage called backlog
  }
  const addTask = (statusId: string) => {
    boardStore.addTask({
      name: 'Test Task',
      description: 'Test Task Description',
      color: '#F5B759',
      order: 1,
      stageId: boardStore.currentBoard?.stages[0].id!,
      assignee: 'John Doe',
      statusId: statusId,
      dueDate: '2022-03-05T14:48:00.000Z'
    })
    const tasks: TaskDetail[] = boardStore.currentBoard?.stages[0].tasks !
    return tasks[tasks.length - 1].id
  }

  beforeEach(() => {
    boardStore = useBoardStore()
    createAndSetCurrentBoard()
  })
  afterEach(() => {
    boardStore.$reset()
  })

  test('after setting a new board as current board Backlog stage will be there initially with 0 tasks', () => {
    expect(boardStore.currentBoard).toBeDefined()
    expect(boardStore.currentBoard?.stages).toBeDefined()
    const stages: StageDetail[] = boardStore.currentBoard?.stages !
    expect(stages.length).toBe(1)
    expect(stages[0].name).toBe('Backlog')
    expect(stages[0].order).toBe(1)
    expect(stages[0].tasks).toStrictEqual([])
  })
  test('add a task to a stage of currentboard', () => {
    const statusId = uuid()
    const taskId = addTask(statusId)
    const tasks: TaskDetail[] = boardStore.currentBoard?.stages[0].tasks !
    expect(tasks.length).toBe(1)
    expect(tasks[tasks.length - 1].name).toBe('Test Task')
    expect(tasks[tasks.length - 1].description).toBe('Test Task Description')
    expect(tasks[tasks.length - 1].order).toBe(1)
    expect(tasks[tasks.length - 1].color).toBe('#F5B759')
    expect(tasks[tasks.length - 1].stageId).toBe(boardStore.currentBoard?.stages[0].id!)
    expect(tasks[tasks.length - 1].assignee).toBe('John Doe')
    expect(tasks[tasks.length - 1].statusId).toBe(statusId)
    expect(tasks[tasks.length - 1].dueDate).toBe('2022-03-05T14:48:00.000Z')
  })
  // test('update stage name', () => {
  //   const stageId = addStage()!
  //   boardStore.updateStage(stageId, {name : 'Updated Stage Name'})
  //   const stages: StageDetail[] = boardStore.currentBoard?.stages !
  //   const updatedStage: StageDetail | undefined = stages.find((e) => e.id === stageId)
  //   expect(updatedStage?.name).toBe('Updated Stage Name')
  // })
  // test('update stage order', () => {
  //   const stageId = addStage()!
  //   boardStore.updateStage(stageId, {order : 3})
  //   const stages: StageDetail[] = boardStore.currentBoard?.stages !
  //   const updatedStage: StageDetail | undefined = stages.find((e) => e.id === stageId)
  //   expect(updatedStage?.order).toBe(3)
  // })
  // test('should not delete backlog stage', () => {
  //   const stages: StageDetail[] = boardStore.currentBoard?.stages !
  //   boardStore.deleteStage(stages[0].id)
  //   expect(stages.length).toBe(1)
  // })
  // test('delete a stage other than backlog', () => {
  //   const stageId2 = addStage()!
  //   const stageId3 = addStage()!
  //   const stages: StageDetail[] = boardStore.currentBoard?.stages !
  //   boardStore.deleteStage(stageId2)
  //   expect(stages.length).toBe(2)
  //   expect(stages[stages.length - 1].id).toBe(stageId3)
  //   boardStore.deleteStage(stageId3)
  //   expect(stages.length).toBe(1)
  // })
})