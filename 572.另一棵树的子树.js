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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) return false
    return isSameTree(root, subRoot) || isSubtree(root.left, subRoot)
      || isSubtree(root.right, subRoot)
  };
  
  
  const isSameTree = (n1, n2) => {
    if (!n1 && !n2) return true
    if ((n1 && !n2) || (!n1 && n2)) return false
    return n1.val === n2.val && isSameTree(n1.left, n2.left)
      && isSameTree(n1.right, n2.right)
  }