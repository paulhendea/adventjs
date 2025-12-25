import { test, describe, expect } from 'vitest';
import { hasFourInARow } from './alt-solution';

describe('challenge #18 (alt solution)', () => {
  test('test 1', () => {
    const board = [
      ['R', '.', '.', '.'],
      ['.', 'R', '.', '.'],
      ['.', '.', 'R', '.'],
      ['.', '.', '.', 'R'],
    ];
    const result = hasFourInARow(board);
    expect(result).toBeTypeOf('boolean');
  });

  test('test 2', () => {
    const board = [
      ['R', '.', '.', '.'],
      ['.', 'R', '.', '.'],
      ['.', '.', 'R', '.'],
      ['.', '.', '.', 'R'],
    ];
    const result = hasFourInARow(board);
    expect(result).toEqual(true);
  });

  test('test 3', () => {
    const board = [
      ['.', '.', '.', 'G'],
      ['.', '.', 'G', '.'],
      ['.', 'G', '.', '.'],
      ['G', '.', '.', '.'],
    ];
    const result = hasFourInARow(board);
    expect(result).toEqual(true);
  });

  test('test 4', () => {
    const board = [
      ['R', 'R', 'R', 'R'],
      ['G', 'G', '.', '.'],
      ['.', '.', '.', '.'],
      ['.', '.', '.', '.'],
    ];
    const result = hasFourInARow(board);
    expect(result).toEqual(true);
  });

  test('test 5', () => {
    const board = [
      ['R', 'G', 'R'],
      ['G', 'R', 'G'],
      ['G', 'R', 'G'],
    ];
    const result = hasFourInARow(board);
    expect(result).toEqual(false);
  });

  test('test 6', () => {
    const board = [
      ['.', 'G', '.'],
      ['.', 'G', '.'],
      ['.', 'G', '.'],
      ['.', 'G', '.'],
    ];
    const result = hasFourInARow(board);
    expect(result).toEqual(true);
  });

  test('test 7', () => {
    const board = [
      ['.', '.', '.', '.', '.'],
      ['.', 'R', '.', '.', '.'],
      ['.', '.', 'R', '.', '.'],
      ['.', '.', '.', 'R', '.'],
      ['.', '.', '.', '.', 'R'],
    ];
    const result = hasFourInARow(board);
    expect(result).toEqual(true);
  });

  test('test 8', () => {
    const board = [
      ['G', '.', '.'],
      ['.', 'G', '.'],
      ['.', '.', 'G'],
    ];
    const result = hasFourInARow(board);
    expect(result).toEqual(false);
  });
});
