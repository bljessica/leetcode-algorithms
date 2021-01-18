/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let min = Number.MAX_SAFE_INTEGER
  let pre = -1
  // 二叉搜索树中序遍历结果是递增的
  function search(node) {
    if (!node) return
    if (node.left) search(node.left)
    if (pre === -1) pre = node.val
    else {
      min = Math.min(min, Math.abs(node.val - pre))
      pre = node.val
    }
    search(node.right)
  }
  search(root)
  return min
};