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
 var isBalanced = function(root) {
  if (!root) {
    return true
  }
  if (Math.abs(calcTreeDepth(root.left) - calcTreeDepth(root.right)) <= 1) {
    return isBalanced(root.left) && isBalanced(root.right)
  } 
  return false
};

function calcTreeDepth(node, depth = 0) {
  if (!node) {
    return depth
  }
  return Math.max(calcTreeDepth(node.left, depth + 1), calcTreeDepth(node.right, depth + 1))
}