import { describe, expect, test } from "vitest";
import { getDateMonthYearFromISO } from "./dateFormatter";

describe('getDateMonthYearFromISO', () => {
  test('iso string input returns date like Aug 20, 2021', () => {
    expect(getDateMonthYearFromISO('2011-10-05T14:48:00.000Z')).toBe('Oct 05, 2011')
  })
  test('for bad input returns Invalid Date', () => {
    expect(getDateMonthYearFromISO('2011-10-05T')).toBe('Invalid Date')
  })
})