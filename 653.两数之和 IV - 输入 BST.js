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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let map = new Map()
  function diff(node) {
    if (!node) return false
    if (map.has(k - node.val)) return true
    if (!map.has(node.val)) map.set(node.val, 1)
    return diff(node.left) || diff(node.right)
  }
  return diff(root)
};