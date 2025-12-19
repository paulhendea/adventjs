/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  const path = []
  for (const [key, value] of Object.entries(workshop)) {
    if (value === gift) {
      path.push(key)
      break
    }
    else if (typeof value === 'object') {
      const recursivePath = findGiftPath(value, gift)
      if (recursivePath.length > 0) path.push(key, ...recursivePath)
    }
  }

  return path
}

const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

const result1 = findGiftPath(workshop, 'train')
console.log(result1) // ➜ ['storage', 'shelf', 'box1']

const result2 = findGiftPath(workshop, 'switch')
console.log(result2) // ➜ ['storage', 'shelf', 'box2']