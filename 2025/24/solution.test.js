import { test, describe, expect } from 'vitest';
import { isTreesSynchronized } from './solution';

describe('challenge #24', () => {
  test('test 1', () => {
    const tree1 = { value: '🎄' };
    const tree2 = { value: '🎄' };
    const result = isTreesSynchronized(tree1, tree2);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('test 2', () => {
    const tree1 = { value: '🎄' };
    const tree2 = { value: '🎄' };
    const result = isTreesSynchronized(tree1, tree2);
    expect(result).toEqual([true, '🎄']);
  });

  test('test 3', () => {
    const tree1 = { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } };
    const tree2 = { value: '🎄', left: { value: '🎅' }, right: { value: '⭐' } };
    const result = isTreesSynchronized(tree1, tree2);
    expect(result).toEqual([true, '🎄']);
  });

  test('test 4', () => {
    const tree1 = { value: '✨', left: { value: '⭐' }, right: { value: '🎅' } };
    const tree2 = { value: '✨', left: { value: '🎅' }, right: { value: '🎁' } };
    const result = isTreesSynchronized(tree1, tree2);
    expect(result).toEqual([false, '✨']);
  });

  test('test 5', () => {
    const tree1 = { value: '🎁' };
    const tree2 = { value: '🎁' };
    const result = isTreesSynchronized(tree1, tree2);
    expect(result).toEqual([true, '🎁']);
  });

  test('test 6', () => {
    const tree1 = { value: '🎄' };
    const tree2 = { value: '🎁' };
    const result = isTreesSynchronized(tree1, tree2);
    expect(result).toEqual([false, '🎄']);
  });

  test('test 7', () => {
    const tree1 = { value: '🎄', left: { value: '⭐' } };
    const tree2 = { value: '🎄', right: { value: '⭐' } };
    const result = isTreesSynchronized(tree1, tree2);
    expect(result).toEqual([true, '🎄']);
  });

  test('test 8', () => {
    const tree1 = { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } };
    const tree2 = { value: '🎁', left: { value: '🎅' }, right: { value: '⭐' } };
    const result = isTreesSynchronized(tree1, tree2);
    expect(result).toEqual([false, '🎄']);
  });

  test('test 9', () => {
    const tree1 = {
      value: '❄️',
      left: { value: '⭐', left: { value: '🎁' }, right: { value: '🎅' } },
      right: { value: '🎅', left: { value: '🎄' }, right: { value: '🎁' } },
    };
    const tree2 = {
      value: '❄️',
      left: { value: '🎅', left: { value: '🎁' }, right: { value: '🎄' } },
      right: { value: '⭐', left: { value: '🎅' }, right: { value: '🎁' } },
    };
    const result = isTreesSynchronized(tree1, tree2);
    expect(result).toEqual([true, '❄️']);
  });
});
