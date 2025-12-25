/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
export function moveReno(board, moves) {
  const boardMatrix = board.trim().split('\n');
  let initialPosition = { x: 0, y: 0 };

  for (let i = 0; i < boardMatrix.length; i++) {
    const roombaPosition = boardMatrix[i].indexOf('@');
    if (roombaPosition >= 0) initialPosition = { y: i, x: roombaPosition };
  }

  const directionDisplacement = {
    L: { x: -1, y: 0 },
    R: { x: +1, y: 0 },
    U: { x: 0, y: -1 },
    D: { x: 0, y: +1 },
  };

  let position = initialPosition;
  let pickedSomethingUp = false;
  let crashed = false;

  for (const direction of moves.split('')) {
    const displacement = directionDisplacement[direction];
    position = {
      x: position.x + displacement.x,
      y: position.y + displacement.y,
    };
    const value = boardMatrix[position.y]?.[position.x];
    if (value === '#' || value === undefined) {
      crashed = true;
      break;
    }
    if (value === '*') {
      pickedSomethingUp = true;
    }
  }

  if (pickedSomethingUp) return 'success';
  else if (crashed) return 'crash';
  else return 'fail';
}
