import { describe } from "vitest";
import { debounce } from "./debounce";

describe('debounce', () => {
  test('function is not executed before specified time', () => {
    let test = 5
    const increase = debounce(() => {
      test++
    }, 50)
    expect(test).toBe(5)
  })
  test('function is executed after specified time', () => {
    let test = 5
    const increase = debounce(() => {
      test++
    }, 500)
    expect(test).toBe(5)
    setTimeout(() => {
      expect(test).toBe(6)
    }, 501)
  })
})