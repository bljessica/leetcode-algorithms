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
var evaluateTree = function(root) {
    const dfs = (node) => {
      if (!node) return 0
      if (!node.left && !node.right) return node.val
      if (node.val === 2) return dfs(node.left) || dfs(node.right)
      else if (node.val === 3) return dfs(node.left) && dfs(node.right)
    }
    return dfs(root)
  };