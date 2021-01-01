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
 * @return {boolean}
 */
var isBalanced = function(root ) {
  function getDepth (node, depth) {
      if (!node) return depth
      return 1 + Math.max(getDepth(node.left, depth), getDepth(node.right, depth))
  }
  if (!root) return true
  return Math.abs(getDepth(root.left, 0) - getDepth(root.right, 0)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};