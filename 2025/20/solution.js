/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
export function dropGifts(warehouse, drops) {
  const GIFT = '#',
    EMPTY_SPACE = '.';

  const newWarehouse = warehouse.map((row) => [...row]);

  for (const colIndex of drops) {
    const rowIndex = newWarehouse.findLastIndex((row) => row[colIndex] === EMPTY_SPACE);
    if (rowIndex === -1) continue;
    newWarehouse[rowIndex][colIndex] = GIFT;
  }
  return newWarehouse;
}
