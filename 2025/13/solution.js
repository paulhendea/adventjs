/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
export function runFactory(factory) {
  if (factory[0][0] === '.') return 'completed';

  const movementCalc = {
    '>': { x: +1, y: 0 },
    '<': { x: -1, y: 0 },
    '^': { x: 0, y: -1 },
    'v': { x: 0, y: +1 },
  };

  const visitedSquares = new Set(['0,0']);

  let status = '';
  let column = 0,
    row = 0;
  while (true) {
    const square = factory[column][row];

    if (square === '.') {
      status = 'completed';
      break;
    }

    const { x, y } = movementCalc[square];
    row += x;
    column += y;

    const newSquare = factory[column]?.[row];

    if (newSquare === undefined) {
      status = 'broken';
      break;
    }

    if (visitedSquares.has(`${column},${row}`)) {
      status = 'loop';
      break;
    } else {
      visitedSquares.add(`${column},${row}`);
    }
  }

  return status;
}
