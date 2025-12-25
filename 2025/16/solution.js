/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
export function packGifts(gifts, maxWeight) {
  if (gifts.length === 0) return 0;

  let sleighs = 0,
    currentSleighWeight = 0;
  let canCarryGifts = true;
  for (const giftSize of gifts) {
    if (giftSize > maxWeight) {
      canCarryGifts = false;
      break;
    } else if (currentSleighWeight + giftSize >= maxWeight) {
      sleighs++;
      currentSleighWeight = currentSleighWeight + giftSize === maxWeight ? 0 : giftSize;
    } else {
      currentSleighWeight += giftSize;
    }
  }
  if (currentSleighWeight > 0) sleighs++;

  if (!canCarryGifts) return null;
  return sleighs;
}
