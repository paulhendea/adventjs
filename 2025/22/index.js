/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
  const SANTA = 'S',
    EXIT = 'E',
    WALL = '#'

  const santaY = maze.findIndex(e => e.includes(SANTA))
  const santaX = maze[santaY].findIndex(e => e === SANTA)
  const santa = {
    x: santaX,
    y: santaY,
    key: `${santaX},${santaY}`,
  }

  const directionsDiff = [
    { x: 0, y: -1 }, // top
    { x: 0, y: +1 }, // bottom
    { x: -1, y: 0 }, // left
    { x: +1, y: 0 }, // right
  ]
  const visited = new Set()
  const queue = [santa]

  while (queue.length > 0) {
    const current = queue.shift();
    visited.add(current.key)

    if (current.value === EXIT) return true

    for (const directionDiff of directionsDiff) {
      const nextX = current.x + directionDiff.x
      const nextY = current.y + directionDiff.y
      const next = {
        x: nextX,
        y: nextY,
        value: maze[nextY]?.[nextX],
        key: `${nextX},${nextY}`,
      }
      if (next.value === undefined || visited.has(next.key)) continue
      if (next.value === WALL) {
        visited.add(next.key)
        continue
      }
      queue.push(next);
    }
  }

  return false
}

const result1 = canEscape([
  ['S', '.', '#', '.'],
  ['#', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['#', '#', '#', 'E']
])
console.log(result1) // → true

const result2 = canEscape([
  ['S', '#', '#'],
  ['.', '#', '.'],
  ['.', '#', 'E']
])
console.log(result2) // → false

const result3 = canEscape([
  ['S', 'E']
])
console.log(result3) // → true