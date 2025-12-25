import { test, describe, expect } from 'vitest';
import { canEscape } from './solution';

describe('challenge #22', () => {
  test('test 1', () => {
    const maze = [
      ['S', '.', '#', '.'],
      ['#', '.', '#', '.'],
      ['.', '.', '.', '.'],
      ['#', '#', '#', 'E'],
    ];
    const result = canEscape(maze);
    expect(result).toBeTypeOf('boolean');
  });

  test('test 2', () => {
    const maze = [
      ['S', '.', '#', '.'],
      ['#', '.', '#', '.'],
      ['.', '.', '.', '.'],
      ['#', '#', '#', 'E'],
    ];
    const result = canEscape(maze);
    expect(result).toEqual(true);
  });

  test('test 3', () => {
    const maze = [
      ['S', '#', '#'],
      ['.', '#', '.'],
      ['.', '#', 'E'],
    ];
    const result = canEscape(maze);
    expect(result).toEqual(false);
  });

  test('test 4', () => {
    const maze = [['S', 'E']];
    const result = canEscape(maze);
    expect(result).toEqual(true);
  });

  test('test 5', () => {
    const maze = [['S', '#', 'E']];
    const result = canEscape(maze);
    expect(result).toEqual(false);
  });

  test('test 6', () => {
    const maze = [
      ['S', '.', '.'],
      ['#', '#', '.'],
      ['E', '.', '.'],
    ];
    const result = canEscape(maze);
    expect(result).toEqual(true);
  });

  test('test 7', () => {
    const maze = [
      ['S', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', 'E'],
    ];
    const result = canEscape(maze);
    expect(result).toEqual(true);
  });

  test('test 8', () => {
    const maze = [
      ['S', '.', '.', '.', '.'],
      ['#', '#', '#', '#', 'E'],
    ];
    const result = canEscape(maze);
    expect(result).toEqual(true);
  });

  test('test 9', () => {
    const maze = [
      ['S', '.', '.'],
      ['#', '#', '.'],
      ['.', '.', '.'],
      ['.', '#', '#'],
      ['.', '.', 'E'],
    ];
    const result = canEscape(maze);
    expect(result).toEqual(true);
  });

  test('test 10', () => {
    const maze = [
      ['S', '.', '#'],
      ['#', '#', '#'],
      ['.', '.', 'E'],
    ];
    const result = canEscape(maze);
    expect(result).toEqual(false);
  });
});
