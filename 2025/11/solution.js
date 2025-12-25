/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
export function findUnsafeGifts(warehouse) {
  const hasGuards = (x, y) => {
    // top, right, bottom, left
    const adjacentSquares = [
      warehouse[x - 1]?.[y],
      warehouse[x][y + 1],
      warehouse[x + 1]?.[y],
      warehouse[x][y - 1],
    ];

    return adjacentSquares.includes('#');
  };

  let unwatchedGifts = 0;
  for (let i = 0; i < warehouse.length; i++) {
    for (let j = 0; j < warehouse[i].length; j++) {
      const element = warehouse[i][j];
      if (element === '*' && !hasGuards(i, j)) {
        unwatchedGifts++;
      }
    }
  }
  return unwatchedGifts;
}
