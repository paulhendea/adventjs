/**
 * @param {string[][]} board
 * @returns {boolean}
 */
export function hasFourInARow(board) {
  const LIGHT_OFF = '.';

  const size = {
    x: board.length,
    y: board[0].length,
  };

  const isFourInSequence = (lights) => {
    const rowStr = lights.join('');
    const result = new RegExp(`([^${LIGHT_OFF}])\\1{3}`);
    return result.test(rowStr);
  };

  // horizontal and vertical
  for (let i = 0; i < size.x; i++) {
    if (isFourInSequence(board[i])) return true;

    const col = board.map((row) => row[i]);
    if (isFourInSequence(col)) return true;
  }

  // diagonals
  let diagonals = {};
  for (let i = 0; i < size.x; i++) {
    for (let j = 0; j < size.y; j++) {
      const light = board[i][j];
      const primary = `p${i + j}`;
      const secondary = `s${i - j}`;
      if (!diagonals[primary]) diagonals[primary] = [];
      if (!diagonals[secondary]) diagonals[secondary] = [];

      diagonals[primary].push(light);
      diagonals[secondary].push(light);
    }
  }

  for (const diagonal of Object.values(diagonals)) {
    if (diagonal.length >= 4 && isFourInSequence(diagonal)) return true;
  }

  // anything else
  return false;
}
