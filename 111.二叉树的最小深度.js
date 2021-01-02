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
var minDepth = function(root, depth = 0) {
  if (!root) return depth
  if (!root.left && !root.right) return depth + 1
  if (!root.left) return minDepth(root.right, depth + 1)
  if (!root.right) return minDepth(root.left, depth + 1)
  return Math.min(minDepth(root.left, depth + 1), minDepth(root.right, depth + 1))
};