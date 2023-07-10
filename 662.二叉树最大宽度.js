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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    const q = [[root, 0]]
    let maxWidth = 1
    while (q.length) {
      const len = q.length
      const left = q[0][1]
      let right = left
      for (let i = 0; i < len; i++) {
        const [node, pos] = q.shift()
        right = pos
        node.left && q.push([node.left, 2 * (pos - left)])
        node.right && q.push([node.right, 2 * (pos - left) + 1])
      }
      maxWidth = Math.max(maxWidth, right - left + 1)
    }
    return maxWidth
  };