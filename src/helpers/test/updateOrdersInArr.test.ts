import { beforeEach, describe, expect, test } from "vitest";
import { v4 as uuid } from 'uuid'
import { updateOrdersInArr } from "../updateOrdersInArr";

describe('update order of objects in array', () => {
  let testArr: {
    id: string;
    order: number
  }[]
  beforeEach(() => {
    testArr = [
      {
        id: uuid(),
        order: 4
      },
      {
        id: uuid(),
        order: 1
      },
      {
        id: uuid(),
        order: 3
      },
      {
        id: uuid(),
        order: 3
      },
      {
        id: uuid(),
        order: 9
      }
    ]
  })
  test('order increases by array index', () => {    
    updateOrdersInArr(testArr)
    // expect(updatedArr.length).toBeLessThanOrEqual(testArr.length)
    expect(testArr[0].order).toBe(1)
    expect(testArr[1].order).toBe(2)
    expect(testArr[2].order).toBe(3)
    expect(testArr[3].order).toBe(4)
    expect(testArr[4].order).toBe(5)
  })
  test('update Array length must be less than or equal to original array', () => {    
    const updateArr = updateOrdersInArr(testArr)
    expect(updateArr.length).toBeLessThanOrEqual(testArr.length)
  })
  test('update Array must have these orders', () => {    
    const updateArr = updateOrdersInArr(testArr)

    expect(updateArr.length).toBe(4)

    expect(updateArr[0].order).toBe(1)
    expect(updateArr[1].order).toBe(2)
    expect(updateArr[2].order).toBe(4)
    expect(updateArr[3].order).toBe(5)
  })
})