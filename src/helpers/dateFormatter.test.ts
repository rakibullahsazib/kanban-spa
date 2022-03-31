import { describe, expect, test } from "vitest";
import { getDateMonthYearFromISO, stringifyDate } from "./dateFormatter";

describe('getDateMonthYearFromISO', () => {
  test('iso string input returns date like Aug 20, 2021', () => {
    expect(getDateMonthYearFromISO('2011-10-05T14:48:00.000Z')).toBe('Oct 05, 2011')
  })
  test('for bad input returns Invalid Date', () => {
    expect(getDateMonthYearFromISO('2011-10-05T')).toBe('Invalid Date')
  })
})

describe('stringifyDate', () => {
  const date = new Date('2011-10-05T14:48:00.000Z')
  test('js Date object input returns date like Aug 20, 2021', () => {
    expect(stringifyDate(date)).toBe('Oct 05, 2011')
  })
})