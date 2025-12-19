/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
  const GIFT = '#',
    EMPTY_SPACE = '.'

  const newWarehouse = warehouse.map(row => [...row])

  for (const colIndex of drops) {
    const rowIndex = newWarehouse.findLastIndex(
      (row) => row[colIndex] === EMPTY_SPACE
    )
    if (rowIndex === -1) continue
    newWarehouse[rowIndex][colIndex] = GIFT

    // cleaning robot
    const lastRow = newWarehouse[newWarehouse.length - 1]
    if (lastRow.every(position => position === GIFT)) {
      newWarehouse.pop()
      newWarehouse.unshift(Array(lastRow.length).fill(EMPTY_SPACE))
    }
  }
  return newWarehouse
}

const result1 = clearGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '.', '#']
  ],
  [1]
)
console.table(result1)
/*
1. The gift falls in column 1
2. Row 2 becomes [# # #].
3. Row 2 is complete, the robot clears it.
6. A new empty row is added at position 0.

Result:
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
]
*/

const result2 = clearGifts(
  [
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
  ],
  [0, 1, 2]
)
console.table(result2)
/*
1. The gift falls in column 0
2. The gift falls in column 1
3. Row 2 becomes [# # #]
4. Row 2 is complete, the robot clears it

For now it looks like this:
[
  ['.', '.', '.']
  ['#', '.', '#'],
  ['#', '.', '#'],
]

5. The gift falls in column 2

Result:
[
  ['.', '.', '#'],
  ['#', '.', '#'],
  ['#', '.', '#']
]
*/