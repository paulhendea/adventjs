/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
export function isTreesSynchronized(tree1, tree2) {
  const rootValue = tree1.value;
  if (rootValue !== tree2.value) return [false, rootValue];

  // check left
  if (typeof tree1.left === 'object' && typeof tree2.right === 'object') {
    const [isSync] = isTreesSynchronized(tree1.left, tree2.right);
    if (!isSync) return [false, rootValue];
  }

  // check right
  if (typeof tree1.right === 'object' && typeof tree2.left === 'object') {
    const [isSync] = isTreesSynchronized(tree1.right, tree2.left);
    if (!isSync) return [false, rootValue];
  }

  return [true, rootValue];
}
