/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  const LIGHT_OFF = '.'

  const isFourInSequence = (lights) => {
    const rowStr = lights.join('')
    const result = new RegExp(`([^${LIGHT_OFF}])\\1{3}`)
    return result.test(rowStr)
  }

  for (let i = 0; i < board.length; i++) {
    if (isFourInSequence(board[i])) return true

    const col = board.map((row) => row[i])
    if (isFourInSequence(col)) return true
  }

  // anything else
  return false
}

const result1 = hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
])
console.log(result1) // true → there are 4 red lights horizontally

const result2 = hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
])
console.log(result2) // true → there are 4 green lights vertically

const result3 = hasFourLights([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
])
console.log(result3) // false → there are no 4 lights of the same color in a row