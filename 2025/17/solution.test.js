import { test, describe, expect } from 'vitest';
import { hasFourLights } from './solution';

describe('challenge #17', () => {
  test('test 1', () => {
    const board = [
      ['.', '.', '.', '.', '.'],
      ['R', 'R', 'R', 'R', '.'],
      ['G', 'G', '.', '.', '.'],
    ];
    const result = hasFourLights(board);
    expect(result).toBeTypeOf('boolean');
  });

  test('test 2', () => {
    const board = [
      ['.', '.', '.', '.', '.'],
      ['R', 'R', 'R', 'R', '.'],
      ['G', 'G', '.', '.', '.'],
    ];
    const result = hasFourLights(board);
    expect(result).toEqual(true);
  });

  test('test 3', () => {
    const board = [
      ['.', 'G', '.', '.'],
      ['.', 'G', '.', '.'],
      ['.', 'G', '.', '.'],
      ['.', 'G', '.', '.'],
    ];
    const result = hasFourLights(board);
    expect(result).toEqual(true);
  });

  test('test 4', () => {
    const board = [
      ['R', 'G', 'R'],
      ['G', 'R', 'G'],
      ['G', 'R', 'G'],
    ];
    const result = hasFourLights(board);
    expect(result).toEqual(false);
  });

  test('test 5', () => {
    const board = [
      ['R', 'R', 'R', '.'],
      ['.', '.', '.', '.'],
    ];
    const result = hasFourLights(board);
    expect(result).toEqual(false);
  });

  test('test 6', () => {
    const board = [
      ['.', '.', 'R', 'R', 'R', 'R'],
      ['.', '.', '.', '.', '.', '.'],
    ];
    const result = hasFourLights(board);
    expect(result).toEqual(true);
  });

  test('test 7', () => {
    const board = [
      ['.', '.', '.', '.'],
      ['.', '.', '.', '.'],
    ];
    const result = hasFourLights(board);
    expect(result).toEqual(false);
  });

  test('test 8', () => {
    const board = [['G', 'G', 'G', 'G', 'G']];
    const result = hasFourLights(board);
    expect(result).toEqual(true);
  });

  test('test 9', () => {
    const board = [
      ['R', '.', '.'],
      ['R', '.', '.'],
      ['R', '.', '.'],
      ['R', '.', '.'],
    ];
    const result = hasFourLights(board);
    expect(result).toEqual(true);
  });

  test('test 10', () => {
    const board = [
      ['R', 'G', 'R', 'G'],
      ['G', 'R', 'G', 'R'],
      ['R', 'G', 'R', 'G'],
      ['G', 'R', 'G', 'R'],
    ];
    const result = hasFourLights(board);
    expect(result).toEqual(false);
  });
});
