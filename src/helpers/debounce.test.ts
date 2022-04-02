import { describe, vi } from "vitest";
import { debounce } from "./debounce";

describe('debounce', () => {
  test.concurrent('function is not executed before specified time', () => {
    let test = 5
    const increase = debounce(() => {
      test++
    }, 50)
    vi.useFakeTimers()
    increase()
    vi.advanceTimersByTime(40)
    expect(test).toBe(5)
  })
  test.concurrent('function is executed after specified time', async () => {
    let test = 5
    const increase = debounce(() => {
      // console.log('increase test to', test + 1)
      test++
    }, 50)
    vi.useFakeTimers()
    increase()
    expect(test).toBe(5)
    vi.advanceTimersByTime(10)
    increase() // this will debounce the first increase call
    expect(test).toBe(5)
    vi.advanceTimersByTime(51)
    expect(test).toBe(6)
  })
})