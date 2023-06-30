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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []
    const queue = [root]
    let toRight = true
    const res = []
    while (queue.length) {
      const len = queue.length
      const arr = []
      for (let i = 0; i < len; i++) {
        const node = queue.shift()
        arr.push(node.val)
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
      }
      if (toRight) res.push(arr)
      else res.push(arr.reverse())
      toRight = !toRight
    }
    return res
  };