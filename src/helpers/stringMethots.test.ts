import { describe, expect, test } from "vitest";
import { checkStringLimit, getInitials } from "./stringMethods";

describe('check string limit', () => {
  test('if left trimmed string length is smaller than or equal to limit return trimmed value', () => {
    expect(checkStringLimit('  str', 4)).toBe('str')
    expect(checkStringLimit('  str', 3)).toBe('str')
  })
  test('if left trimmed string length is greater than limit return left trimmed substring', () => {
    expect(checkStringLimit('  str  ', 4)).toBe('str ')
    expect(checkStringLimit('  str  ', 2)).toBe('st')
    expect(checkStringLimit('  str  ', 1)).toBe('s')
  })
})
describe('getInitials', () => {
  test('if input has two words join first letter of both words', () => {
    expect(getInitials('John Doe')).toBe('JD')
    expect(getInitials('john doe')).toBe('jd')
  })
  test('if input has one word join return first letter of the word', () => {
    expect(getInitials('John')).toBe('J')
    expect(getInitials('john')).toBe('j')
  })
  test('if input has two words join first letter of firt two words', () => {
    expect(getInitials('John Albert Doe')).toBe('JA')
  })
})