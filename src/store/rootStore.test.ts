import { setActivePinia, createPinia } from 'pinia'
import { afterEach, beforeAll, beforeEach, describe, expect, test } from 'vitest'
import { useRootStore } from './root.store'

beforeAll(() => {
  setActivePinia(createPinia())
})
describe('root store', () => {
  let rootStore: ReturnType<typeof useRootStore>  

  beforeEach(() => {
    rootStore = useRootStore()
  })
  afterEach(() => {
    rootStore.$reset()
  })

  test('root store defined', () => {
    expect(rootStore).toBeDefined()
  })
  test('toggle current dropdown', () => {
    expect(rootStore.currentDropdown).toBe('')
    // set current dropdown to test and toggle it
    rootStore.toggleCurrentDropdown('test')
    expect(rootStore.currentDropdown).toBe('test')
    rootStore.toggleCurrentDropdown('test')
    expect(rootStore.currentDropdown).toBe('')
    // set current dropdown to test and then setting to test2
    rootStore.toggleCurrentDropdown('test')
    expect(rootStore.currentDropdown).toBe('test')
    rootStore.toggleCurrentDropdown('test2')
    expect(rootStore.currentDropdown).toBe('test2')
  })

})