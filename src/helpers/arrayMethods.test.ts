import { describe, expect, test } from "vitest";
import { HasOrderAndId } from "../store/interface/common.interface";
import { v4 as uuid } from 'uuid'
import { getMaxOrder, isNameDuplicatedCaseInsensitive } from "./arrayMethods";

describe('get max order', () => {
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
describe('isNameDuplicatedCaseInsensitive', () => {
  const testArr = [
    {name: 'Test 1'},
    {name: 'Test 2'},
    {name: 'Test 3'},
    {name: 'Test 4'},
    {name: 'Test 5'},
  ]
  test('passing no duplicates', () => {
    expect(isNameDuplicatedCaseInsensitive('test', testArr)).toBe(false)
  })
  test('passing duplicate with same case', () => {
    expect(isNameDuplicatedCaseInsensitive('Test 1', testArr)).toBe(true)
  })
  test('passing duplicate with different case', () => {
    expect(isNameDuplicatedCaseInsensitive('tesT 1', testArr)).toBe(true)
  })
})