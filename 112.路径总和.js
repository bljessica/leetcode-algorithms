/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  function searchPath(node, curSum) {
      if (!node) return false
      if (!node.left && !node.right) return curSum + node.val === sum
      return searchPath(node.right, curSum + node.val) || searchPath(node.left, curSum + node.val)
  }
  return searchPath(root, 0)
};