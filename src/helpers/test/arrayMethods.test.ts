import { describe, expect, test } from "vitest";
import { HasOrderAndId } from "../../store/interface/common.interface";
import { v4 as uuid } from 'uuid'
import { getMaxOrder } from "../arrayMethods";

describe('test array helper methods', () => {
  test('get max order in an array of objects', () => {
    const testArr: HasOrderAndId[] = [
      {
        id: uuid(),
        order: -1,
      },
      {
        id: uuid(),
        order: 2,
      },
      {
        id: uuid(),
        order: 4,
      },
      {
        id: uuid(),
        order: 4,
      },
      {
        id: uuid(),
        order: 2,
      }
    ]
    const maxOrder = getMaxOrder(testArr)
    expect(maxOrder).toBe(4)
  })
})