import { describe, expect, test } from 'vitest';
import { timeUntilTakeOff } from './solution';

const takeoff = '2025*12*25@00|00|00 NP';

describe('challenge #5', () => {
  test('test 1', () => {
    const result = timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff);
    expect(result).toBeTypeOf('number');
  });

  test('test 2', () => {
    const result = timeUntilTakeOff(takeoff, takeoff);
    expect(result).toEqual(0);
  });

  test('test 3', () => {
    const result = timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff);
    expect(result).toEqual(-12);
  });

  test('test 4', () => {
    const result = timeUntilTakeOff('2025*12*24@00|00|00 NP', takeoff);
    expect(result).toEqual(86400);
  });

  test('test 5', () => {
    const result = timeUntilTakeOff('2025*12*27@00|00|00 NP', takeoff);
    expect(result).toEqual(-172800);
  });

  test('test 6', () => {
    const result = timeUntilTakeOff('2030*01*01@00|00|10 NP', '2030*01*01@00|00|20 NP');
    expect(result).toEqual(10);
  });

  test('test 7', () => {
    const result = timeUntilTakeOff('2030*01*01@00|01|00 NP', '2030*01*01@00|00|00 NP');
    expect(result).toEqual(-60);
  });

  test('test 8', () => {
    const result = timeUntilTakeOff('2025*12*24@23|59|59 NP', takeoff);
    expect(result).toEqual(1);
  });

  test('test 9', () => {
    const result = timeUntilTakeOff('2025*12*24@23|59|58 NP', takeoff);
    expect(result).toEqual(2);
  });
});
