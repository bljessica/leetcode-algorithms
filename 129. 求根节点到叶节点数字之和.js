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
 var sumNumbers = function(root) {
  const strNumArr = []
  const dfs = (node, curStr = '') => {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      strNumArr.push(curStr + node.val)
      return
    }
    dfs(node.left, curStr + node.val)
    dfs(node.right, curStr + node.val)
  }
  dfs(root)
  return strNumArr.reduce((res, cur) => {
    return res + Number(cur)
  }, 0)
};