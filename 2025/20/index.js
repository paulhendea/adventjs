/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
  const GIFT = '#',
    EMPTY_SPACE = '.'

  const newWarehouse = warehouse.map(row => [...row])

  for (const colIndex of drops) {
    const rowIndex = newWarehouse.findLastIndex(
      (row) => row[colIndex] === EMPTY_SPACE
    )
    if (rowIndex === -1) continue
    newWarehouse[rowIndex][colIndex] = GIFT
  }
  return newWarehouse
}

const result1 = dropGifts(
  [
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['#', '#', '.']
  ],
  [0]
)
console.table(result1)
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/

const result2 = dropGifts(
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '#']
  ],
  [0, 2]
)
console.table(result2)
/*
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/