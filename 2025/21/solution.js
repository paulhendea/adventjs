/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
export function clearGifts(warehouse, drops) {
  const GIFT = '#',
    EMPTY_SPACE = '.';

  const newWarehouse = warehouse.map((row) => [...row]);

  for (const colIndex of drops) {
    const rowIndex = newWarehouse.findLastIndex((row) => row[colIndex] === EMPTY_SPACE);
    if (rowIndex === -1) continue;
    newWarehouse[rowIndex][colIndex] = GIFT;

    // cleaning robot
    const lastRow = newWarehouse[newWarehouse.length - 1];
    if (lastRow.every((position) => position === GIFT)) {
      newWarehouse.pop();
      newWarehouse.unshift(Array(lastRow.length).fill(EMPTY_SPACE));
    }
  }
  return newWarehouse;
}
