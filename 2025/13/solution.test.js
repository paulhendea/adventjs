import { test, describe, expect } from 'vitest';
import { runFactory } from './solution';

describe('challenge #13', () => {
  test('test 1', () => {
    const factory = ['>>.'];
    const result = runFactory(factory);
    expect(result).toBeTypeOf('string');
  });

  test('test 2', () => {
    const factory = ['>>.'];
    const result = runFactory(factory);
    expect(result).toEqual('completed');
  });

  test('test 3', () => {
    const factory = ['>>>'];
    const result = runFactory(factory);
    expect(result).toEqual('broken');
  });

  test('test 4', () => {
    const factory = ['>><'];
    const result = runFactory(factory);
    expect(result).toEqual('loop');
  });

  test('test 5', () => {
    const factory = ['>>v', '..<'];
    const result = runFactory(factory);
    expect(result).toEqual('completed');
  });

  test('test 6', () => {
    const factory = ['>>v', '<<<'];
    const result = runFactory(factory);
    expect(result).toEqual('broken');
  });

  test('test 7', () => {
    const factory = ['>v.', '^..'];
    const result = runFactory(factory);
    expect(result).toEqual('completed');
  });

  test('test 8', () => {
    const factory = ['v.', '^.'];
    const result = runFactory(factory);
    expect(result).toEqual('loop');
  });

  test('test 9', () => {
    const factory = ['.'];
    const result = runFactory(factory);
    expect(result).toEqual('completed');
  });

  test('test 10', () => {
    const factory = ['^'];
    const result = runFactory(factory);
    expect(result).toEqual('broken');
  });

  test('test 11', () => {
    const factory = ['v', '^'];
    const result = runFactory(factory);
    expect(result).toEqual('loop');
  });

  test('test 12', () => {
    const factory = ['>'];
    const result = runFactory(factory);
    expect(result).toEqual('broken');
  });

  test('test 13', () => {
    const factory = ['<.'];
    const result = runFactory(factory);
    expect(result).toEqual('broken');
  });
});
