/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
  const SANTA = 'S',
    HOUSE = 'G',
    WALL = '#';

  let santaPosition;
  const houses = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      const key = `${j},${i}`;
      if (map[i][j] === SANTA) {
        santaPosition = {
          x: j,
          y: i,
          key,
        };
      } else if (map[i][j] === HOUSE) {
        houses.push(key);
      }
    }
  }

  if (houses.length <= 0) return -1;

  const allowedMoves = [
    { x: 0, y: -1 }, // top
    { x: 0, y: +1 }, // bottom
    { x: -1, y: 0 }, // left
    { x: +1, y: 0 }, // right
  ];

  const distancesFromStart = new Map([[santaPosition.key, 0]]);
  const visited = new Set();
  const queue = [santaPosition];

  while (queue.length > 0) {
    const current = queue.shift();
    visited.add(current.key);

    for (const neighbor of allowedMoves) {
      const nextX = current.x + neighbor.x;
      const nextY = current.y + neighbor.y;
      const next = {
        x: nextX,
        y: nextY,
        value: map[nextY]?.[nextX],
        key: `${nextX},${nextY}`,
      };
      if (next.value === undefined || next.value === WALL || visited.has(next.key))
        continue;

      // calculate distances
      const newDistance = distancesFromStart.get(current.key) + 1;
      if (newDistance < (distancesFromStart.get(next.key) ?? Infinity)) {
        distancesFromStart.set(next.key, newDistance);
      }

      queue.push(next);
    }
  }

  let result = 0;
  for (const houseKey of houses) {
    const houseDistance = distancesFromStart.get(houseKey);
    if (houseDistance === undefined) return -1;
    result += houseDistance;
  }

  return result;
}

const result1 = minStepsToDeliver([
  ['S', '.', 'G'],
  ['.', '#', '.'],
  ['G', '.', '.'],
]);
console.log(result1); // Result: 4

/* 
Explanation:
- Minimum distance from S (0,0) to G (0,2): 2 steps
- Minimum distance from S (0,0) to G (2,0): 2 steps
- Total: 2 + 2 = 4
*/

const result2 = minStepsToDeliver([
  ['S', '#', 'G'],
  ['#', '#', '.'],
  ['G', '.', '.'],
]);
console.log(result2); // Result: -1
// (The house at (0,2) is unreachable due to obstacles)

const result3 = minStepsToDeliver([['S', 'G']]);
console.log(result3); // Result: 1
