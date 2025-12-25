import { test, describe, expect } from 'vitest';
import { clearGifts } from './solution';

describe('challenge #21', () => {
  test('test 1', () => {
    const warehouse = [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['#', '.', '#'],
    ];
    const result = clearGifts(warehouse, [1]);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('test 2', () => {
    const warehouse = [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['#', '.', '#'],
    ];
    const result = clearGifts(warehouse, [1]);
    expect(result).toEqual([
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.'],
    ]);
  });

  test('test 3', () => {
    const warehouse = [
      ['.', '.', '#'],
      ['#', '.', '#'],
      ['#', '.', '#'],
    ];
    const result = clearGifts(warehouse, [0, 1, 2]);
    expect(result).toEqual([
      ['.', '.', '#'],
      ['#', '.', '#'],
      ['#', '.', '#'],
    ]);
  });

  test('test 4', () => {
    const warehouse = [
      ['.', '.', '.'],
      ['#', '#', '.'],
      ['#', '#', '.'],
    ];
    const result = clearGifts(warehouse, [2, 2]);
    expect(result).toEqual([
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.'],
    ]);
  });

  test('test 5', () => {
    const warehouse = [
      ['.', '.'],
      ['.', '.'],
    ];
    const result = clearGifts(warehouse, [1, 1]);
    expect(result).toEqual([
      ['.', '#'],
      ['.', '#'],
    ]);
  });

  test('test 6', () => {
    const warehouse = [
      ['#', '.'],
      ['#', '.'],
    ];
    const result = clearGifts(warehouse, [0]);
    expect(result).toEqual([
      ['#', '.'],
      ['#', '.'],
    ]);
  });

  test('test 7', () => {
    const warehouse = [['.']];
    const result = clearGifts(warehouse, [0]);
    expect(result).toEqual([['.']]);
  });

  test('test 8', () => {
    const warehouse = [
      ['.', '.'],
      ['#', '.'],
    ];
    const result = clearGifts(warehouse, [0]);
    expect(result).toEqual([
      ['#', '.'],
      ['#', '.'],
    ]);
  });
});
