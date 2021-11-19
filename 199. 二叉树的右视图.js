/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
  if (!root) {
    return []
  }
  const queue = [root]
  const res = []
  while (queue.length) {
    const len = queue.length
    res.push(queue[len - 1].val)
    for (let i = 0; i < len; i++) {
      const node = queue.shift() 
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
  return res
};