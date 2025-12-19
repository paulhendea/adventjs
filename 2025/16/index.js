/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  if (gifts.length === 0) return 0

  let sleighs = 0, currentSleighWeight = 0
  let canCarryGifts = true
  for (const giftSize of gifts) {
    if (giftSize > maxWeight) {
      canCarryGifts = false
      break
    }
    else if (currentSleighWeight + giftSize >= maxWeight) {
      sleighs++
      currentSleighWeight = currentSleighWeight + giftSize === maxWeight
        ? 0
        : giftSize
    }
    else {
      currentSleighWeight += giftSize
    }
  }
  if (currentSleighWeight > 0) sleighs++

  if (!canCarryGifts) return null
  return sleighs
}

const result1 = packGifts([2, 3, 4, 1], 5)
console.log(result1)
// 2 sleighs
// Sleigh 1: 2 + 3 = 5
// Sleigh 2: 4 + 1 = 5

const result2 = packGifts([3, 3, 2, 1], 3)
console.log(result2)
// 3 sleighs
// Sleigh 1: 3
// Sleigh 2: 3
// Sleigh 3: 2 + 1 = 3