/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
  if (!inorder.length) {
    return null
  }
  const root = new TreeNode(postorder[postorder.length - 1])
  const rootIdx = inorder.findIndex(node => node === root.val)
  root.left = buildTree(inorder.slice(0, rootIdx), postorder.slice(0, rootIdx))
  root.right = buildTree(inorder.slice(rootIdx + 1), postorder.slice(rootIdx, postorder.length - 1))
  return root
};