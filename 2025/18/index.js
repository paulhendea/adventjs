/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
  const LIGHT_OFF = '.'

  const size = {
    x: board.length,
    y: board[0].length,
  }

  const isFourInSequence = (lights) => {
    const rowStr = lights.join('')
    const result = new RegExp(`([^${LIGHT_OFF}])\\1{3}`)
    return result.test(rowStr)
  }

  // horizontal and vertical
  for (let i = 0; i < size.x; i++) {
    if (isFourInSequence(board[i])) return true

    const col = board.map((row) => row[i])
    if (isFourInSequence(col)) return true
  }

  // diagonals
  let diagonals = {}
  for (let i = 0; i < size.x; i++) {
    for (let j = 0; j < size.y; j++) {
      const light = board[i][j]
      const primary = `p${i + j}`
      const secondary = `s${i - j}`
      if (!diagonals[primary]) diagonals[primary] = []
      if (!diagonals[secondary]) diagonals[secondary] = []

      diagonals[primary].push(light)
      diagonals[secondary].push(light)
    }
  }

  for (const diagonal of Object.values(diagonals)) {
    if (diagonal.length >= 4 && isFourInSequence(diagonal)) return true
  }

  // anything else
  return false
}

const result1 = hasFourInARow([
  ['R', '.', '.', '.'],
  ['.', 'R', '.', '.'],
  ['.', '.', 'R', '.'],
  ['.', '.', '.', 'R']
])
console.log(result1)
// true → there are 4 red lights in a ↘ diagonal

const result2 = hasFourInARow([
  ['.', '.', '.', 'G'],
  ['.', '.', 'G', '.'],
  ['.', 'G', '.', '.'],
  ['G', '.', '.', '.']
])
console.log(result2)
// true → there are 4 green lights in a ↙ diagonal

const result3 = hasFourInARow([
  ['R', 'R', 'R', 'R'],
  ['G', 'G', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.']
])
console.log(result3)
// true → there are 4 red lights in a horizontal line

const result4 = hasFourInARow([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
])
console.log(result4)
// false → there are no 4 consecutive lights of the same color



// another example from chatgpt
function hasFourInARow(board) {
  const EMPTY = '.'
  const rows = board.length
  const cols = board[0].length

  // directions: right, down, diag-right, diag-left
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1]
  ]

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = board[r][c]
      if (cell === EMPTY) continue

      for (const [dr, dc] of directions) {
        let count = 1
        let nr = r + dr
        let nc = c + dc

        while (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          board[nr][nc] === cell
        ) {
          count++
          if (count === 4) return true
          nr += dr
          nc += dc
        }
      }
    }
  }

  return false
}
