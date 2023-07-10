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
 * @return {string[][]}
 */
var printTree = function(root) {
    const calcHeight = (root, curHeight) => {
      if (!root) return curHeight
      if (!root.left && !root.right) return curHeight
      return Math.max(calcHeight(root.left, curHeight + 1), calcHeight(root.right, curHeight + 1))
    }
    let height = calcHeight(root, 0)
    const rows = height + 1, cols = Math.pow(2, height + 1) - 1
    const res = new Array(rows)
    for (let i = 0; i < rows; i++) {
      res[i] = new Array(cols).fill('')
    }
    const dfs = (root, r, c) => {
      if (r >= rows || c >= cols) return
      res[r][c] = String(root.val)
      if (root.left) dfs(root.left, r + 1, c - Math.pow(2, height - r - 1))
      if (root.right) dfs(root.right, r + 1, c + Math.pow(2, height - r - 1))
    }
    dfs(root, 0, (cols - 1) / 2)
    return res
  }