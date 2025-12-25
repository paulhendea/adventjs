import { describe, expect, test } from 'vitest';
import { decodeSantaPin } from './solution';

describe('challenge #4', () => {
  test('test 1', () => {
    const code = '[1++][2-][3+][<]';
    const result = decodeSantaPin(code);
    expect(result).toBeTypeOf('string');
  });

  test('test 2', () => {
    const code = '[1++][2-][3+][<]';
    const result = decodeSantaPin(code);
    expect(result).toEqual('3144');
  });

  test('test 3', () => {
    const code = '[9+][0-][4][<]';
    const result = decodeSantaPin(code);
    expect(result).toEqual('0944');
  });

  test('test 4', () => {
    const code = '[1+][2-]';
    const result = decodeSantaPin(code);
    expect(result).toBeNull();
  });

  test('test 5', () => {
    const code = '[4][5++][6--][5++]';
    const result = decodeSantaPin(code);
    expect(result).toEqual('4747');
  });

  test('test 6', () => {
    const code = '[9+][0-][0-][8+]';
    const result = decodeSantaPin(code);
    expect(result).toEqual('0999');
  });

  test('test 7', () => {
    const code = '[0][<][<][<]';
    const result = decodeSantaPin(code);
    expect(result).toEqual('0000');
  });

  test('test 8', () => {
    const code = '[1+++++++++][2--][3----][<]';
    const result = decodeSantaPin(code);
    expect(result).toEqual('0099');
  });

  test('test 9', () => {
    const code = '[3+][7+][<][<]';
    const result = decodeSantaPin(code);
    expect(result).toEqual('4888');
  });

  test('test 10', () => {
    const code = '[0-][0-][0-][0-]';
    const result = decodeSantaPin(code);
    expect(result).toEqual('9999');
  });
});
