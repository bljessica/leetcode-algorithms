/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  if (!root) {
    return true
  }
  function isSymmetricSame(left, right) {
    if (!left && !right) {
      return true
    }
    if (!left || !right || left.val !== right.val) {
      return false
    }
    return isSymmetricSame(left.left, right.right) && isSymmetricSame(left.right, right.left)
  }
  return isSymmetricSame(root.left, root.right)
};