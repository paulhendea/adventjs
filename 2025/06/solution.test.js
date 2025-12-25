import { test, describe, expect } from 'vitest';
import { matchGloves } from './solution';

describe('challenge #6', () => {
  test('test 1', () => {
    const gloves = [
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'blue' },
      { hand: 'L', color: 'green' },
    ];
    const result = matchGloves(gloves);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('test 2', () => {
    const gloves = [
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'blue' },
      { hand: 'L', color: 'green' },
    ];
    const result = matchGloves(gloves);
    expect(result).toEqual(['red', 'green']);
  });

  test('test 3', () => {
    const gloves = [
      { hand: 'L', color: 'gold' },
      { hand: 'R', color: 'gold' },
      { hand: 'L', color: 'gold' },
      { hand: 'L', color: 'gold' },
      { hand: 'R', color: 'gold' },
    ];
    const result = matchGloves(gloves);
    expect(result).toEqual(['gold', 'gold']);
  });

  test('test 4', () => {
    const gloves = [
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'blue' },
    ];
    const result = matchGloves(gloves);
    expect(result).toEqual([]);
  });

  test('test 5', () => {
    const gloves = [
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'R', color: 'green' },
    ];
    const result = matchGloves(gloves);
    expect(result).toEqual(['red', 'green']);
  });

  test('test 6', () => {
    const gloves = [
      { hand: 'R', color: 'blue' },
      { hand: 'L', color: 'blue' },
      { hand: 'R', color: 'blue' },
      { hand: 'L', color: 'blue' },
      { hand: 'L', color: 'blue' },
    ];
    const result = matchGloves(gloves);
    expect(result).toEqual(['blue', 'blue']);
  });

  test('test 7', () => {
    const gloves = [
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' },
    ];
    const result = matchGloves(gloves);
    expect(result).toEqual(['red', 'green']);
  });

  test('test 8', () => {
    const gloves = [
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' },
      { hand: 'L', color: 'red' },
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' },
    ];
    const result = matchGloves(gloves);
    expect(result).toEqual([]);
  });

  test('test 9', () => {
    const gloves = [
      { hand: 'L', color: 'silver' },
      { hand: 'L', color: 'silver' },
      { hand: 'R', color: 'silver' },
      { hand: 'R', color: 'silver' },
      { hand: 'R', color: 'silver' },
    ];
    const result = matchGloves(gloves);
    expect(result).toEqual(['silver', 'silver']);
  });

  test('test 10', () => {
    const gloves = [
      { hand: 'L', color: 'pink' },
      { hand: 'R', color: 'pink' },
      { hand: 'L', color: 'pink' },
      { hand: 'R', color: 'pink' },
    ];
    const result = matchGloves(gloves);
    expect(result).toEqual(['pink', 'pink']);
  });

  test('test 11', () => {
    const gloves = [
      { hand: 'R', color: 'black' },
      { hand: 'R', color: 'black' },
      { hand: 'L', color: 'black' },
      { hand: 'L', color: 'black' },
      { hand: 'L', color: 'black' },
    ];
    const result = matchGloves(gloves);
    expect(result).toEqual(['black', 'black']);
  });
});
