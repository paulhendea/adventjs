/**
 * @param {string[][]} board
 * @returns {boolean}
 */
export function hasFourLights(board) {
  const LIGHT_OFF = '.';

  const isFourInSequence = (lights) => {
    const rowStr = lights.join('');
    const result = new RegExp(`([^${LIGHT_OFF}])\\1{3}`);
    return result.test(rowStr);
  };

  for (let i = 0; i < board.length; i++) {
    if (isFourInSequence(board[i])) return true;

    const col = board.map((row) => row[i]);
    if (isFourInSequence(col)) return true;
  }

  // anything else
  return false;
}
