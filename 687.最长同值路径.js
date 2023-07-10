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
var longestUnivaluePath = function(root) {
    let res = 0
    const dfs = (node) => {
      if (!node) return 0
      let [l, r] = [dfs(node.left), dfs(node.right)]
      if (node.left && node.val === node.left.val) l++
      else l = 0
      if (node.right && node.val === node.right.val) r++
      else r = 0
      res = Math.max(res, l + r)
      return Math.max(l, r)
    }
    dfs(root)
    return res
  };