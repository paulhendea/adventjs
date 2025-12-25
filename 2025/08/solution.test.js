import { test, describe, expect } from 'vitest';
import { findUniqueToy } from './solution';

describe('challenge #8', () => {
  test('test 1', () => {
    const result = findUniqueToy('Gift');
    expect(result).toBeTypeOf('string');
  });

  test('test 2', () => {
    const result = findUniqueToy('Gift');
    expect(result).toEqual('G');
  });

  test('test 3', () => {
    const result = findUniqueToy('sS');
    expect(result).toEqual('');
  });

  test('test 4', () => {
    const result = findUniqueToy('reindeeR');
    expect(result).toEqual('i');
  });

  test('test 5', () => {
    const result = findUniqueToy('sTreSS');
    expect(result).toEqual('T');
  });

  test('test 6', () => {
    const result = findUniqueToy('aA');
    expect(result).toEqual('');
  });

  test('test 7', () => {
    const result = findUniqueToy('z');
    expect(result).toEqual('z');
  });

  test('test 8', () => {
    const result = findUniqueToy('');
    expect(result).toEqual('');
  });

  test('test 9', () => {
    const result = findUniqueToy('abcDEF');
    expect(result).toEqual('a');
  });

  test('test 10', () => {
    const result = findUniqueToy('aabbc');
    expect(result).toEqual('c');
  });

  test('test 11', () => {
    const result = findUniqueToy('AaBbCc');
    expect(result).toEqual('');
  });

  test('test 12', () => {
    const result = findUniqueToy('SantaSantaS');
    expect(result).toEqual('');
  });

  test('test 13', () => {
    const result = findUniqueToy('ElvesTreeElves');
    expect(result).toEqual('T');
  });
});
