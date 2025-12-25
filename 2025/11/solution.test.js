import { test, describe, expect } from 'vitest';
import { findUnsafeGifts } from './solution';

describe('challenge #11', () => {
  test('test 1', () => {
    // prettier-ignore
    const warehouse = [
      '.*.',
      '*#*', 
      '.*.',
    ];
    const result = findUnsafeGifts(warehouse);
    expect(result).toBeTypeOf('number');
  });

  test('test 2', () => {
    // prettier-ignore
    const warehouse = [
      '.*.',
      '*#*', 
      '.*.',
    ];
    const result = findUnsafeGifts(warehouse);
    expect(result).toEqual(0);
  });

  test('test 3', () => {
    // prettier-ignore
    const warehouse = [
      '...', 
      '.*.', 
      '...',
    ]
    const result = findUnsafeGifts(warehouse);
    expect(result).toEqual(1);
  });

  test('test 4', () => {
    // prettier-ignore
    const warehouse = [
      '*.*',
      '...',
      '*#*',
    ]
    const result = findUnsafeGifts(warehouse);
    expect(result).toEqual(2);
  });

  test('test 5', () => {
    // prettier-ignore
    const warehouse = [
      '.....',
      '.*.*.',
      '..#..',
      '.*.*.',
      '.....',
    ]
    const result = findUnsafeGifts(warehouse);
    expect(result).toEqual(4);
  });

  test('test 6', () => {
    // prettier-ignore
    const warehouse = [
      '#*.',
      '...',
      '..#',
    ]
    const result = findUnsafeGifts(warehouse);
    expect(result).toEqual(0);
  });

  test('test 7', () => {
    // prettier-ignore
    const warehouse = [
      '...#....',
      '..*#*..',
      '...#....',
    ]
    const result = findUnsafeGifts(warehouse);
    expect(result).toEqual(0);
  });

  test('test 8', () => {
    // prettier-ignore
    const warehouse = [
      '*.*',
      '...',
      '*.*',
    ]
    const result = findUnsafeGifts(warehouse);
    expect(result).toEqual(4);
  });

  test('test 9', () => {
    // prettier-ignore
    const warehouse = [
      '.#.',
      '***',
      '.#.',
    ]
    const result = findUnsafeGifts(warehouse);
    expect(result).toEqual(2);
  });

  test('test 10', () => {
    // prettier-ignore
    const warehouse = [
      '.*..',
      '.#..',
      '..*.',
    ]
    const result = findUnsafeGifts(warehouse);
    expect(result).toEqual(1);
  });
});
