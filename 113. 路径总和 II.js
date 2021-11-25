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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
  const res = []
  const dfs = (node, target, arr) => {
    if (!node) {
      return
    }
    if (!node.left && !node.right && node.val === target) {
      res.push([...arr, node.val])
    }
    dfs(node.left, target - node.val, [...arr, node.val])
    dfs(node.right, target - node.val, [...arr, node.val])
  }
  dfs(root, targetSum, [])
  return res
};