import { describe, expect, test } from "vitest";
import { checkStringLimit } from "./stringMethods";

describe('check string limit', () => {
  test('if trimmed string length is smaller than or equal to limit return trimmed value', () => {
    expect(checkStringLimit('  str  ', 4)).toBe('str')
    expect(checkStringLimit('  str  ', 3)).toBe('str')
  })
  test('if trimmed string length is greater than limit return trimmed substring', () => {
    expect(checkStringLimit('  str  ', 2)).toBe('st')
    expect(checkStringLimit('  str  ', 1)).toBe('s')
  })
})