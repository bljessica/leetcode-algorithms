/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root) {
    return []
  }
  const queue = [root]
  const res = []
  while (queue.length) {
    const tmp = [], len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      tmp.push(node.val)
    }
    res.push(tmp)
  }
  return res
};