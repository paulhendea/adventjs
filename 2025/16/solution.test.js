import { test, describe, expect } from 'vitest';
import { packGifts } from './solution';

describe('challenge #16', () => {
  test('test 1', () => {
    const result = packGifts([2, 3, 4, 1], 5);
    expect(result).toBeTypeOf('number');
  });

  test('test 2', () => {
    const result = packGifts([2, 3, 4, 1], 5);
    expect(result).toEqual(2);
  });

  test('test 3', () => {
    const result = packGifts([3, 3, 2, 1], 3);
    expect(result).toEqual(3);
  });

  test('test 4', () => {
    const result = packGifts([1, 1, 1, 1], 2);
    expect(result).toEqual(2);
  });

  test('test 5', () => {
    const result = packGifts([5, 6, 1], 5);
    expect(result).toBeNull();
  });

  test('test 6', () => {
    const result = packGifts([], 10);
    expect(result).toEqual(0);
  });

  test('test 7', () => {
    const result = packGifts([1, 2, 3, 4, 5], 10);
    expect(result).toEqual(2);
  });

  test('test 8', () => {
    const result = packGifts([5, 5, 5, 5], 5);
    expect(result).toEqual(4);
  });

  test('test 9', () => {
    const result = packGifts([1], 1);
    expect(result).toEqual(1);
  });

  test('test 10', () => {
    const result = packGifts([10], 5);
    expect(result).toBeNull();
  });

  test('test 11', () => {
    const result = packGifts([1, 2, 3], 6);
    expect(result).toEqual(1);
  });

  test('test 12', () => {
    const result = packGifts([3, 3, 3], 5);
    expect(result).toEqual(3);
  });

  test('test 13', () => {
    const result = packGifts([1, 1, 1, 1, 1, 1, 1, 1], 3);
    expect(result).toEqual(3);
  });

  test('test 14', () => {
    const result = packGifts([2, 2, 2, 2, 2], 4);
    expect(result).toEqual(3);
  });
});
