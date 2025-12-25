import { describe, expect, test } from 'vitest';
import { drawGift } from './solution';

describe('challenge #3', () => {
  test('test 1', () => {
    const result = drawGift(4, '*');
    expect(result).toBeTypeOf('string');
  });

  test('test 2', () => {
    const result = drawGift(1, '+');
    expect(result).toEqual('');
  });

  test('test 3', () => {
    const result = drawGift(2, '#');
    expect(result).toEqual('##\n##');
  });

  test('test 4', () => {
    const result = drawGift(3, '#');
    expect(result).toEqual('###\n# #\n###');
  });

  test('test 5', () => {
    const result = drawGift(4, '*');
    expect(result).toEqual('****\n*  *\n*  *\n****');
  });

  test('test 6', () => {
    const result = drawGift(5, '@');
    expect(result).toEqual('@@@@@\n@   @\n@   @\n@   @\n@@@@@');
  });

  test('test 7', () => {
    const result = drawGift(3, 'X');
    expect(result).toEqual('XXX\nX X\nXXX');
  });

  test('test 8', () => {
    const result = drawGift(4, '$');
    expect(result).toEqual('$$$$\n$  $\n$  $\n$$$$');
  });
});
