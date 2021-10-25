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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
  const dummy = new TreeNode(-1)
  dummy.right = root
  let p = dummy
  const preorderTraversal = (node) => {
    if (!node) {
      return 
    }
    p.right = node
    const left = node.left, right = node.right
    node.left = null
    p = p.right
    preorderTraversal(left)
    preorderTraversal(right)
  } 
  preorderTraversal(root)
  return dummy.right
};