import { test, describe, expect } from 'vitest';
import { revealSantaRoute } from './solution';

describe('challenge #19', () => {
  test('test 1', () => {
    const routes = [
      ['MEX', 'CAN'],
      ['UK', 'GER'],
      ['CAN', 'UK'],
    ];
    const result = revealSantaRoute(routes);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('test 2', () => {
    const routes = [
      ['MEX', 'CAN'],
      ['UK', 'GER'],
      ['CAN', 'UK'],
    ];
    const result = revealSantaRoute(routes);
    expect(result).toEqual(['MEX', 'CAN', 'UK', 'GER']);
  });

  test('test 3', () => {
    const routes = [
      ['USA', 'BRA'],
      ['JPN', 'PHL'],
      ['BRA', 'UAE'],
      ['UAE', 'JPN'],
      ['CMX', 'HKN'],
    ];
    const result = revealSantaRoute(routes);
    expect(result).toEqual(['USA', 'BRA', 'UAE', 'JPN', 'PHL']);
  });

  test('test 4', () => {
    const routes = [
      ['STA', 'HYD'],
      ['ESP', 'CHN'],
    ];
    const result = revealSantaRoute(routes);
    expect(result).toEqual(['STA', 'HYD']);
  });

  test('test 5', () => {
    const routes = [
      ['A', 'B'],
      ['C', 'D'],
      ['E', 'F'],
      ['G', 'H'],
    ];
    const result = revealSantaRoute(routes);
    expect(result).toEqual(['A', 'B']);
  });

  test('test 6', () => {
    const routes = [
      ['A', 'B'],
      ['C', 'D'],
      ['B', 'C'],
      ['Z', 'X'],
    ];
    const result = revealSantaRoute(routes);
    expect(result).toEqual(['A', 'B', 'C', 'D']);
  });

  test('test 7', () => {
    const routes = [
      ['A', 'B'],
      ['C', 'D'],
      ['M', 'N'],
      ['Z', 'X'],
    ];
    const result = revealSantaRoute(routes);
    expect(result).toEqual(['A', 'B']);
  });

  test('test 8', () => {
    const routes = [];
    const result = revealSantaRoute(routes);
    expect(result).toEqual([]);
  });
});
