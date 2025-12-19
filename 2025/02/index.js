/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  const result = []
  for (const gift of giftsToProduce) {
    const { quantity, toy } = gift
    if (quantity <= 0) continue
    result.push(...Array(quantity).fill(toy))
  }
  return result
}

const production = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]
const result = manufactureGifts(production)
console.log(result) // expected: ['car', 'car', 'car', 'doll', 'ball', 'ball']