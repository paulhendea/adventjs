/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
export function findGiftPath(workshop, gift) {
  const path = [];
  for (const [key, value] of Object.entries(workshop)) {
    if (value === gift) {
      path.push(key);
      break;
    } else if (typeof value === 'object') {
      const recursivePath = findGiftPath(value, gift);
      if (recursivePath.length > 0) path.push(key, ...recursivePath);
    }
  }

  return path;
}
