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
var sumOfLeftLeaves = function(root) {
  let res = 0
  function isLeaf(node) {
    if (!node) return false
    if (!node.left && !node.right) return true
    return false
  }
  function dfs(node) {
    if (!node) return
    if (isLeaf(node.left)) res += node.left.val
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return res
};