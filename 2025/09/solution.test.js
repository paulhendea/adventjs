import { test, describe, expect } from 'vitest';
import { moveReno } from './solution';

const board = `
.....
.*#.*
.@...
.....
`;

describe('challenge #9', () => {
  test('test 1', () => {
    const result = moveReno(board, 'U');
    expect(result).toBeTypeOf('string');
  });

  test('test 2', () => {
    const result = moveReno(board, 'U');
    expect(result).toEqual('success');
  });

  test('test 3', () => {
    const result = moveReno(board, 'RRRUU');
    expect(result).toEqual('success');
  });

  test('test 4', () => {
    const result = moveReno(board, 'D');
    expect(result).toEqual('fail');
  });

  test('test 5', () => {
    const result = moveReno(board, 'DD');
    expect(result).toEqual('crash');
  });

  test('test 6', () => {
    const result = moveReno(board, 'RU');
    expect(result).toEqual('crash');
  });

  test('test 7', () => {
    const result = moveReno(board, 'UUU');
    expect(result).toEqual('success');
  });

  test('test 8', () => {
    const result = moveReno(board, 'RR');
    expect(result).toEqual('fail');
  });

  test('test 9', () => {
    const result = moveReno(`\n  .....\n  .....\n  .@..*\n  .....\n`, 'RRRRRRRRR');
    expect(result).toEqual('success');
  });

  test('test 10', () => {
    const result = moveReno(board, 'LLLL');
    expect(result).toEqual('crash');
  });

  test('test 11', () => {
    const result = moveReno(board, 'LU');
    expect(result).toEqual('fail');
  });
});
