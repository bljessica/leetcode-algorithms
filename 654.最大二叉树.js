/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    const dfs = (arr) => {
      if (!arr || !arr.length) return null
      const max = Math.max(...arr)
      const maxIdx = arr.findIndex(item => item === max)
      const node = new TreeNode(max)
      node.left = dfs(arr.slice(0, maxIdx))
      node.right = dfs(arr.slice(maxIdx + 1))
      return node
    }
    return dfs(nums)
  };