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
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
  const dummy = new TreeNode(-1)
  let p = dummy
  const inorderTraversal = (node) => {
    if (!node) {
      return
    } 
    inorderTraversal(node.left)
    p.right = node
    node.left = null
    p = p.right
    inorderTraversal(node.right)
  }
  inorderTraversal(root)
  return dummy.right
};