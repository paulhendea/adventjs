import { test, describe, expect } from 'vitest';
import { dropGifts } from './solution';

describe('challenge #20', () => {
  test('test 1', () => {
    const warehouse = [
      ['.', '.', '.'],
      ['.', '#', '.'],
      ['#', '#', '.'],
    ];
    const result = dropGifts(warehouse, [0]);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('test 2', () => {
    const warehouse = [
      ['.', '.', '.'],
      ['.', '#', '.'],
      ['#', '#', '.'],
    ];
    const result = dropGifts(warehouse, [0]);
    expect(result).toEqual([
      ['.', '.', '.'],
      ['#', '#', '.'],
      ['#', '#', '.'],
    ]);
  });

  test('test 3', () => {
    const warehouse = [
      ['.', '.', '.'],
      ['#', '#', '.'],
      ['#', '#', '#'],
    ];
    const result = dropGifts(warehouse, [0, 2]);
    expect(result).toEqual([
      ['#', '.', '.'],
      ['#', '#', '#'],
      ['#', '#', '#'],
    ]);
  });

  test('test 4', () => {
    const warehouse = [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.'],
    ];
    const result = dropGifts(warehouse, [0, 1, 2]);
    expect(result).toEqual([
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['#', '#', '#'],
    ]);
  });

  test('test 5', () => {
    const warehouse = [
      ['#', '.'],
      ['#', '.'],
    ];
    const result = dropGifts(warehouse, [0]);
    expect(result).toEqual([
      ['#', '.'],
      ['#', '.'],
    ]);
  });

  test('test 6', () => {
    const warehouse = [['.']];
    const result = dropGifts(warehouse, [0]);
    expect(result).toEqual([['#']]);
  });

  test('test 7', () => {
    const warehouse = [
      ['.', '.'],
      ['.', '.'],
    ];
    const result = dropGifts(warehouse, [0, 0]);
    expect(result).toEqual([
      ['#', '.'],
      ['#', '.'],
    ]);
  });

  test('test 8', () => {
    const warehouse = [
      ['.', '.'],
      ['.', '.'],
      ['.', '.'],
    ];
    const result = dropGifts(warehouse, [0, 1, 0, 1]);
    expect(result).toEqual([
      ['.', '.'],
      ['#', '#'],
      ['#', '#'],
    ]);
  });

  test('test 9', () => {
    const warehouse = [
      ['#', '#'],
      ['#', '#'],
    ];
    const result = dropGifts(warehouse, [0, 1]);
    expect(result).toEqual([
      ['#', '#'],
      ['#', '#'],
    ]);
  });
});
