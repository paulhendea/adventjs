/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  // Code here
  if (size < 2) return ''

  let gift = []
  for (let i = 0; i < size; i++) {
    if (i === 0 || i === size - 1) {
      gift.push(Array(size).fill(symbol).join(''))
    }
    else {
      const sides = Array.from(
        { length: size },
        (item, index) => index === 0 || index === size - 1 ? symbol : ' '
      ).join('')
      gift.push(sides)
    }
  }
  return gift.join('\n')
}

const result = drawGift(4, '*')
console.log(result)
/* expected:
 ****
 *  *
 *  *
 ****
 */
