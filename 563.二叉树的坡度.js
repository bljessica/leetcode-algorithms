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
var findTilt = function(root) {
  if (!root) return 0
  let res = 0
  function calcNodeGrad(node) {
    if (!node) return 0
    let left = calcNodeGrad(node.left)
    let right = calcNodeGrad(node.right)
    res += Math.abs(left - right)
    return left + right + node.val
  }
  calcNodeGrad(root)
  return res
};