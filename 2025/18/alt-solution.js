/**
 * Another solution from chatgpt :)
 * @param {string[][]} board
 * @returns {boolean}
 */
export function hasFourInARow(board) {
  const EMPTY = '.';
  const rows = board.length;
  const cols = board[0].length;

  // directions: right, down, diag-right, diag-left
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = board[r][c];
      if (cell === EMPTY) continue;

      for (const [dr, dc] of directions) {
        let count = 1;
        let nr = r + dr;
        let nc = c + dc;

        while (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] === cell) {
          count++;
          if (count === 4) return true;
          nr += dr;
          nc += dc;
        }
      }
    }
  }

  return false;
}
