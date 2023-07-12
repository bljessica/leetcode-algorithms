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
var minDiffInBST = function(root) {
    const arr = []
    const dfs = (node) => {
      if (!node) return
      arr.push(node.val)
      dfs(node.left)
      dfs(node.right)
    }
    dfs(root)
    let min = Number.MAX_SAFE_INTEGER
    arr.sort((a, b) => a - b)
    for (let i = 1; i < arr.length; i++) {
      min = Math.min(min, arr[i] - arr[i - 1])
    }
    return min
  };