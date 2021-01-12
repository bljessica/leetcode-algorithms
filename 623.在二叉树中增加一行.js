/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  if (!root) return null
  if (d === 1) {
    const newRoot = new TreeNode(v)
    newRoot.left = root
    root = newRoot
  } else {
    let rowIdx = 1
    let queue = [root]
    // 找到要插入的层
    while(queue.length && rowIdx < d - 1) {
      rowIdx++
      let len = queue.length
      for (let i = 0; i < len; i++) {
        const node = queue.shift()
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    for (let i = 0; i < queue.length; i++) {
      const left = queue[i].left
      const right = queue[i].right
      const newL = new TreeNode(v)
      const newR = new TreeNode(v)
      newL.left = left
      newR.right = right
      queue[i].left = newL
      queue[i].right = newR
    }
  }
  return root
};