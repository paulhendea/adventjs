import { test, describe, expect } from 'vitest';
import { findGiftPath } from './solution';

const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch',
    },
    box: 'car',
  },
  gift: 'doll',
};

describe('challenge #14', () => {
  test('test 1', () => {
    const result = findGiftPath(workshop, 'train');
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('test 2', () => {
    const result = findGiftPath(workshop, 'train');
    expect(result).toEqual(['storage', 'shelf', 'box1']);
  });

  test('test 3', () => {
    const result = findGiftPath(workshop, 'switch');
    expect(result).toEqual(['storage', 'shelf', 'box2']);
  });

  test('test 4', () => {
    const result = findGiftPath(workshop, 'car');
    expect(result).toEqual(['storage', 'box']);
  });

  test('test 5', () => {
    const result = findGiftPath(workshop, 'doll');
    expect(result).toEqual(['gift']);
  });

  test('test 6', () => {
    const result = findGiftPath(workshop, 'plane');
    expect(result).toEqual([]);
  });

  test('test 7', () => {
    const result = findGiftPath({ a: { b: { c: 42 } } }, 42);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  test('test 8', () => {
    const result = findGiftPath(
      { ok: true, nested: { nope: false, extra: { is: 0 } } },
      false
    );
    expect(result).toEqual(['nested', 'nope']);
  });

  test('test 9', () => {
    const result = findGiftPath({ a: { b: 'x' }, c: 'y' }, 'y');
    expect(result).toEqual(['c']);
  });

  test('test 10', () => {
    const result = findGiftPath({ a: 'x', x: 'a' }, 'x');
    expect(result).toEqual(['a']);
  });
});
