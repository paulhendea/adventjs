/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
  return gifts.filter(gift => !gift.includes('#'))
}

const gifts = ['car', 'doll#arm', 'ball', '#train']
const result = filterGifts(gifts)
console.log(result) // expected: ['car', 'ball']