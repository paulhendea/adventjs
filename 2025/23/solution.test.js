import { test, describe, expect } from 'vitest';
import { minStepsToDeliver } from './solution';

describe('challenge #22', () => {
  test('test 1', () => {
    const maze = [
      ['S', '.', 'G'],
      ['.', '#', '.'],
      ['G', '.', '.'],
    ];
    const result = minStepsToDeliver(maze);
    expect(result).toBeTypeOf('number');
  });

  test('test 2', () => {
    const maze = [
      ['S', '.', 'G'],
      ['.', '#', '.'],
      ['G', '.', '.'],
    ];
    const result = minStepsToDeliver(maze);
    expect(result).toEqual(4);
  });

  test('test 3', () => {
    const maze = [
      ['S', '#', 'G'],
      ['#', '#', '.'],
      ['G', '.', '.'],
    ];
    const result = minStepsToDeliver(maze);
    expect(result).toEqual(-1);
  });

  test('test 4', () => {
    const maze = [['S', 'G']];
    const result = minStepsToDeliver(maze);
    expect(result).toEqual(1);
  });

  test('test 5', () => {
    const maze = [['S', '#', 'E']];
    const result = minStepsToDeliver(maze);
    expect(result).toEqual(-1);
  });

  test('test 6', () => {
    const maze = [
      ['S', '.', '.'],
      ['#', '#', '.'],
      ['G', '.', '.'],
    ];
    const result = minStepsToDeliver(maze);
    expect(result).toEqual(6);
  });

  test('test 7', () => {
    const maze = [
      ['S', '.', 'G'],
      ['.', '.', '.'],
      ['G', '.', '.'],
    ];
    const result = minStepsToDeliver(maze);
    expect(result).toEqual(4);
  });

  test('test 8', () => {
    const maze = [
      ['S', '.', '#', '.', '.'],
      ['#', '#', '#', '#', 'G'],
    ];
    const result = minStepsToDeliver(maze);
    expect(result).toEqual(-1);
  });
});
