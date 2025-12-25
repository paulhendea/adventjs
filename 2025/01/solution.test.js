import { test, describe, expect } from 'vitest';
import { filterGifts } from './solution';

describe('challenge #1', () => {
  test('test 1', () => {
    const gifts = ['car', 'doll#arm', 'ball', '#train'];
    const result = filterGifts(gifts);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('test 2', () => {
    const gifts = ['car', 'doll#arm', 'ball', '#train'];
    const result = filterGifts(gifts);
    expect(result).toEqual(['car', 'ball']);
  });

  test('test 3', () => {
    const gifts = ['#broken', '#rusty'];
    const result = filterGifts(gifts);
    expect(result).toEqual([]);
  });

  test('test 4', () => {
    const gifts = [];
    const result = filterGifts(gifts);
    expect(result).toEqual([]);
  });

  test('test 5', () => {
    const gifts = ['game', 'poster', 'sticker#bad', 'console'];
    const result = filterGifts(gifts);
    expect(result).toEqual(['game', 'poster', 'console']);
  });

  test('test 6', () => {
    const gifts = ['#bad', 'car', '#oops', 'ball'];
    const result = filterGifts(gifts);
    expect(result).toEqual(['car', 'ball']);
  });

  test('test 7', () => {
    const gifts = ['toy', 'toy#bad', 'ball', '#car'];
    const result = filterGifts(gifts);
    expect(result).toEqual(['toy', 'ball']);
  });

  test('test 8', () => {
    const gifts = ['puzzle', '#robot', 'puzzle', 'figure#x'];
    const result = filterGifts(gifts);
    expect(result).toEqual(['puzzle', 'puzzle']);
  });
});
