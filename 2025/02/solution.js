/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
export function manufactureGifts(giftsToProduce) {
  const result = [];
  for (const gift of giftsToProduce) {
    const { quantity, toy } = gift;
    if (quantity <= 0) continue;
    result.push(...Array(quantity).fill(toy));
  }
  return result;
}
