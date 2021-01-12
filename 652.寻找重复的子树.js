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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  // 序列化二叉树
  const map = new Map()
  const res = []
  function collect(node) {
    if (!node) return '#'
    const str = node.val + '->' + collect(node.left) + ',' + collect(node.right)
    if (map.has(str)) {
      map.set(str, map.get(str) + 1)
    } else {
      map.set(str, 1)
    }
    if (map.get(str) === 2) {
      res.push(node)
    }
    return str
  }
  collect(root)
  return res
};