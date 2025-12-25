import { test, describe, expect } from 'vitest';
import { maxDepth } from './solution';

describe('challenge #10', () => {
  test('test 1', () => {
    const text = '[]';
    const result = maxDepth(text);
    expect(result).toBeTypeOf('number');
  });

  test('test 2', () => {
    const text = '[]';
    const result = maxDepth(text);
    expect(result).toEqual(1);
  });

  test('test 3', () => {
    const text = '[[]]';
    const result = maxDepth(text);
    expect(result).toEqual(2);
  });

  test('test 4', () => {
    const text = '[][]';
    const result = maxDepth(text);
    expect(result).toEqual(1);
  });

  test('test 5', () => {
    const text = '[[][]]';
    const result = maxDepth(text);
    expect(result).toEqual(2);
  });

  test('test 6', () => {
    const text = '[[[]]]';
    const result = maxDepth(text);
    expect(result).toEqual(3);
  });

  test('test 7', () => {
    const text = '[][[]][]';
    const result = maxDepth(text);
    expect(result).toEqual(2);
  });

  test('test 8', () => {
    const text = '][';
    const result = maxDepth(text);
    expect(result).toEqual(-1);
  });

  test('test 9', () => {
    const text = '[[[';
    const result = maxDepth(text);
    expect(result).toEqual(-1);
  });

  test('test 10', () => {
    const text = '[]]]';
    const result = maxDepth(text);
    expect(result).toEqual(-1);
  });

  test('test 11', () => {
    const text = '[][][';
    const result = maxDepth(text);
    expect(result).toEqual(-1);
  });

  test('test 12', () => {
    const text = '[[[[]]]]';
    const result = maxDepth(text);
    expect(result).toEqual(4);
  });

  test('test 13', () => {
    const text = '[[][[]]]';
    const result = maxDepth(text);
    expect(result).toEqual(3);
  });
});
