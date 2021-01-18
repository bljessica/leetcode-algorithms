/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if (!root) return 0
  let max = Number.MIN_SAFE_INTEGER
  function depth(node) { // 节点个数
    if (!node) return 0
    let left = depth(node.left)
    let right = depth(node.right)
    max = Math.max(max, left + right + 1)
    return Math.max(left, right) + 1
  }
  depth(root)
  return max - 1
};