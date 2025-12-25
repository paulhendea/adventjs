import { test, describe, expect } from 'vitest';
import { drawTable } from './solution';

describe('challenge #15', () => {
  test('test 1', () => {
    const data = [
      { name: 'Charlie', city: 'New York' },
      { name: 'Alice', city: 'London' },
      { name: 'Bob', city: 'Paris' },
    ];
    const result = drawTable(data, 'name');
    expect(result).toBeTypeOf('string');
  });

  test('test 2', () => {
    const data = [
      { name: 'Charlie', city: 'New York' },
      { name: 'Alice', city: 'London' },
      { name: 'Bob', city: 'Paris' },
    ];
    const result = drawTable(data, 'name');
    // prettier-ignore
    const expected =
`+---------+----------+
| A       | B        |
+---------+----------+
| Alice   | London   |
| Bob     | Paris    |
| Charlie | New York |
+---------+----------+`;
    expect(result).toEqual(expected);
  });

  test('test 3', () => {
    const data = [
      { gift: 'Book', quantity: 5 },
      { gift: 'Music CD', quantity: 1 },
      { gift: 'Doll', quantity: 10 },
    ];
    const result = drawTable(data, 'quantity');
    // prettier-ignore
    const expected =
`+----------+----+
| A        | B  |
+----------+----+
| Music CD | 1  |
| Book     | 5  |
| Doll     | 10 |
+----------+----+`;
    expect(result).toEqual(expected);
  });

  test('test 4', () => {
    const data = [
      { name: 'Alice', city: 'Paris' },
      { name: 'Bob', city: 'London' },
    ];
    const result = drawTable(data, 'city');
    // prettier-ignore
    const expected =
`+-------+--------+
| A     | B      |
+-------+--------+
| Bob   | London |
| Alice | Paris  |
+-------+--------+`;
    expect(result).toEqual(expected);
  });

  test('test 5', () => {
    const data = [{ name: 'Alice', city: 'London' }];
    const result = drawTable(data, 'name');
    // prettier-ignore
    const expected =
`+-------+--------+
| A     | B      |
+-------+--------+
| Alice | London |
+-------+--------+`;
    expect(result).toEqual(expected);
  });

  test('test 6', () => {
    const data = [
      { a: 2, b: 'Y', c: 'X' },
      { a: 1, b: 'Z', c: 'W' },
      { a: 3, b: 'A', c: 'B' },
    ];
    const result = drawTable(data, 'a');
    // prettier-ignore
    const expected =
`+---+---+---+
| A | B | C |
+---+---+---+
| 1 | Z | W |
| 2 | Y | X |
| 3 | A | B |
+---+---+---+`;
    expect(result).toEqual(expected);
  });

  test('test 7', () => {
    const data = [
      { id: 'zebra', active: true },
      { id: 'alpha', active: false },
    ];
    const result = drawTable(data, 'id');
    // prettier-ignore
    const expected =
`+-------+-------+
| A     | B     |
+-------+-------+
| alpha | false |
| zebra | true  |
+-------+-------+`;
    expect(result).toEqual(expected);
  });

  test('test 8', () => {
    const data = [
      { name: 'Short', city: 'TinyCity' },
      { name: 'VeryLongNameIndeed', city: 'MegaLongCityName' },
    ];
    const result = drawTable(data, 'name');
    // prettier-ignore
    const expected =
`+--------------------+------------------+
| A                  | B                |
+--------------------+------------------+
| Short              | TinyCity         |
| VeryLongNameIndeed | MegaLongCityName |
+--------------------+------------------+`;
    expect(result).toEqual(expected);
  });

  test('test 9', () => {
    const data = [{ title: 'Banana' }, { title: 'Apple' }];
    const result = drawTable(data, 'title');
    // prettier-ignore
    const expected =
`+--------+
| A      |
+--------+
| Apple  |
| Banana |
+--------+`;
    expect(result).toEqual(expected);
  });
});
