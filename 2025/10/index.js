/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  let openingBrackets = 0
  let closingBrackets = 0
  let bracketsMaxDiff = 0
  for (const letter of s.split('')) {
    if (letter === '[') openingBrackets++
    else if (letter === ']') closingBrackets++

    if (closingBrackets > openingBrackets) break
    bracketsMaxDiff = Math.max(bracketsMaxDiff, openingBrackets - closingBrackets)
  }

  if (closingBrackets !== openingBrackets) return -1
  else return bracketsMaxDiff
}

console.log(maxDepth('[]')) // -> 1
console.log(maxDepth('[[]]')) // -> 2