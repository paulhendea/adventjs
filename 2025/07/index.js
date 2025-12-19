/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  const treeCharFunc = function* () {
    let index = 0
    while (true) {
      index++
      if (index % frequency === 0) yield ornament
      else yield '*'
    }
  }
  const treeChar = treeCharFunc()

  let tree = ''
  for (let i = 1; i <= height; i++) {
    const rowLength = i * 2 - 1
    const blankPadding = ' '.repeat(height - i)
    let treeRow = blankPadding
    for (let j = 1; j <= rowLength; j++) {
      treeRow += treeChar.next().value
    }
    tree += treeRow + '\n'
  }
  const blackTrunkPadding = ' '.repeat(height - 1)
  tree += `${blackTrunkPadding}#`
  return tree
}

const result = drawTree(5, 'o', 2)
console.log(result)
// expected:
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #