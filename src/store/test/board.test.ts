import { setActivePinia, createPinia } from 'pinia'
import { afterEach, beforeAll, beforeEach, describe, expect, test } from 'vitest'
import { useBoardStore } from '../board'
import { v4 as uuid, validate as uuidValidate } from 'uuid'

beforeAll(() => {
  setActivePinia(createPinia())
})
describe('Board Store', () => {
  let boardStore: ReturnType<typeof useBoardStore>  
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
    boardStore.addBoard({
      name: 'Test Board',
      description: 'Test Board Description'
    })
    expect(boardStore.boards[0]).toBeDefined()
    expect(boardStore.boards[0].name).toBe('Test Board')
    expect(boardStore.boards[0].description).toBe('Test Board Description')
  })
})