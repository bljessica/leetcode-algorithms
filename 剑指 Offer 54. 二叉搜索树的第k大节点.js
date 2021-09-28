/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
  const arr = []
  function inorderTraversal(node) {
    if (!node) return
    inorderTraversal(node.left)
    arr.push(node.val)
    inorderTraversal(node.right)
  }
  inorderTraversal(root)
  return arr[arr.length - k]
};