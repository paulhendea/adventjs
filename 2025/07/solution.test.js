import { test, describe, expect } from 'vitest';
import { drawTree } from './solution';

describe('challenge #7', () => {
  test('test 1', () => {
    const result = drawTree(5, 'o', 2);
    expect(result).toBeTypeOf('string');
  });

  test('test 2', () => {
    const result = drawTree(5, 'o', 2);
    // prettier-ignore
    const expected = 
`    *
   o*o
  *o*o*
 o*o*o*o
*o*o*o*o*
    #`;
    expect(result).toEqual(expected);
  });

  test('test 3', () => {
    const result = drawTree(3, '@', 3);
    // prettier-ignore
    const expected = 
`  *
 *@*
*@**@
  #`
    expect(result).toEqual(expected);
  });

  test('test 4', () => {
    const result = drawTree(4, '+', 1);
    // prettier-ignore
    const expected = 
`   +
  +++
 +++++
+++++++
   #`
    expect(result).toEqual(expected);
  });

  test('test 5', () => {
    const result = drawTree(1, 'x', 2);
    // prettier-ignore
    const expected = 
`*
#`
    expect(result).toEqual(expected);
  });

  test('test 6', () => {
    const result = drawTree(2, 'o', 2);
    // prettier-ignore
    const expected = 
` *
o*o
 #`
    expect(result).toEqual(expected);
  });

  test('test 7', () => {
    const result = drawTree(3, '*', 2);
    // prettier-ignore
    const expected = 
`  *
 ***
*****
  #`
    expect(result).toEqual(expected);
  });

  test('test 8', () => {
    const result = drawTree(4, 'o', 3);
    // prettier-ignore
    const expected = 
`   *
  *o*
 *o**o
**o**o*
   #`
    expect(result).toEqual(expected);
  });
});
