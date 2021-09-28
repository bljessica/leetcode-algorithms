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
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
  let num = 0
  function dfs(node, curSum, flag) {
    if (!node) {
      return
    }
    curSum += node.val
    if (curSum === targetSum) {
      num++
    }
    dfs(node.left, curSum, true)
    dfs(node.right, curSum, true)
    if (!flag) {
      dfs(node.left, 0, false)
      dfs(node.right, 0, false)
    }
  }
  dfs(root, 0, false)
  return num
};