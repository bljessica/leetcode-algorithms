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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let res = 0
    const midTraversal = (node) => {
      if (!node) return
      midTraversal(node.left)
      if (node.val >= low && node.val <= high) res += node.val
      midTraversal(node.right)
    }
    midTraversal(root)
    return res
  };
  
  