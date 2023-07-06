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
 * @return {number[]}
 */
var findMode = function(root) {
    // 中序遍历
    let res = []
    let maxCount = 0, curCount = 0, curVal = 1e-6
    const dfs = (node) => {
      if (!node) return
      dfs(node.left)
      if (node.val === curVal) {
        curCount++
      } else {
        curVal = node.val
        curCount = 0
      }
      if (curCount === maxCount) {
        res.push(node.val)
      } else if (curCount > maxCount) {
        maxCount = curCount
        res = [node.val]
      }
      dfs(node.right)
    }
    dfs(root)
    return res
  };