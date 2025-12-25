import { test, describe, expect } from 'vitest';
import { elfBattle } from './solution';

describe('challenge #12', () => {
  test('test 1', () => {
    const result = elfBattle('A', 'B');
    expect(result).toBeTypeOf('number');
  });

  test('test 2', () => {
    const result = elfBattle('A', 'B');
    expect(result).toEqual(0);
  });

  test('test 3', () => {
    const result = elfBattle('F', 'B');
    expect(result).toEqual(1);
  });

  test('test 4', () => {
    const result = elfBattle('AAB', 'BBA');
    expect(result).toEqual(0);
  });

  test('test 5', () => {
    const result = elfBattle('AFA', 'BBA');
    expect(result).toEqual(1);
  });

  test('test 6', () => {
    const result = elfBattle('AFAB', 'BBAF');
    expect(result).toEqual(1);
  });

  test('test 7', () => {
    const result = elfBattle('AA', 'FF');
    expect(result).toEqual(2);
  });

  test('test 8', () => {
    const result = elfBattle('AAFFFBBB', 'ABBBBFFF');
    expect(result).toEqual(1);
  });

  test('test 9', () => {
    const result = elfBattle('FFA', 'BBA');
    expect(result).toEqual(1);
  });

  test('test 10', () => {
    const result = elfBattle('ABA', 'FAF');
    expect(result).toEqual(2);
  });
});
