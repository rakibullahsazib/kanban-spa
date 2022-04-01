import { describe, expect, test } from "vitest";
import { hexToRGB } from "./colorCode";

describe('hexToRGB', () => {
  test('convert hex(3 digits) to rgb', () => {
    expect(hexToRGB('#000')).toBe('rgb(0, 0, 0)')
    expect(hexToRGB('#FFF')).toBe('rgb(255, 255, 255)')
    expect(hexToRGB('#F00')).toBe('rgb(255, 0, 0)')
  })
  test('convert hex(6 digits) to rgb', () => {
    expect(hexToRGB('#000000')).toBe('rgb(0, 0, 0)')
    expect(hexToRGB('#FFFFFF')).toBe('rgb(255, 255, 255)')
    expect(hexToRGB('#FF0000')).toBe('rgb(255, 0, 0)')
    expect(hexToRGB('#00FF00')).toBe('rgb(0, 255, 0)')
    expect(hexToRGB('#0000FF')).toBe('rgb(0, 0, 255)')
    expect(hexToRGB('#FFFF00')).toBe('rgb(255, 255, 0)')
    expect(hexToRGB('#00FFFF')).toBe('rgb(0, 255, 255)')
    expect(hexToRGB('#FF00FF')).toBe('rgb(255, 0, 255)')
    expect(hexToRGB('#C0C0C0')).toBe('rgb(192, 192, 192)')
    expect(hexToRGB('#808080')).toBe('rgb(128, 128, 128)')
  })
})