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
 var maxDepth = function(root) {
  function dfs (node, curDepth) {
    if (!node) {
      return curDepth
    }
    return Math.max(dfs(node.left, curDepth), dfs(node.right, curDepth)) + 1
  }
  return dfs(root, 0)
};