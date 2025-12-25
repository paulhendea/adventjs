import { describe, expect, test } from 'vitest';
import { manufactureGifts } from './solution';

describe('challenge #2', () => {
  test('test 1', () => {
    const production = [
      { toy: 'car', quantity: 3 },
      { toy: 'doll', quantity: 1 },
      { toy: 'ball', quantity: 2 },
    ];
    const result = manufactureGifts(production);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('test 2', () => {
    const production = [
      { toy: 'car', quantity: 3 },
      { toy: 'doll', quantity: 1 },
      { toy: 'ball', quantity: 2 },
    ];
    const result = manufactureGifts(production);
    expect(result).toEqual(['car', 'car', 'car', 'doll', 'ball', 'ball']);
  });

  test('test 3', () => {
    const production = [
      { toy: 'train', quantity: 0 },
      { toy: 'bear', quantity: -2 },
      { toy: 'puzzle', quantity: 1 },
    ];
    const result = manufactureGifts(production);
    expect(result).toEqual(['puzzle']);
  });

  test('test 4', () => {
    const result = manufactureGifts([]);
    expect(result).toEqual([]);
  });

  test('test 5', () => {
    const production = [
      { toy: 'car', quantity: 1 },
      { toy: 'doll', quantity: 2 },
      { toy: 'ball', quantity: 0 },
      { toy: 'car', quantity: 3 },
    ];
    const result = manufactureGifts(production);
    expect(result).toEqual(['car', 'doll', 'doll', 'car', 'car', 'car']);
  });

  test('test 6', () => {
    const production = [
      { toy: 'robot', quantity: 2 },
      { toy: 'drone', quantity: -3 },
      { toy: 'ball', quantity: 1 },
    ];
    const result = manufactureGifts(production);
    expect(result).toEqual(['robot', 'robot', 'ball']);
  });

  test('test 7', () => {
    const production = [
      { toy: 'console', quantity: 2 },
      { toy: 'game', quantity: 3 },
    ];
    const result = manufactureGifts(production);
    expect(result).toEqual(['console', 'console', 'game', 'game', 'game']);
  });

  test('test 8', () => {
    const production = [
      { toy: 'keyboard', quantity: 1 },
      { toy: 'mouse', quantity: 1 },
      { toy: 'pad', quantity: 1 },
    ];
    const result = manufactureGifts(production);
    expect(result).toEqual(['keyboard', 'mouse', 'pad']);
  });
});
