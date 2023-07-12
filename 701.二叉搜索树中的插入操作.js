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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val)
    let p = root
    while (p) {
      if (val < p.val) {
        if (!p.left) {
          p.left = new TreeNode(val) 
          break
        } else {
          p = p.left
        }
      } else {
        if (!p.right) {
          p.right = new TreeNode(val)
          break
        } else {
          p = p.right
        }
      }
    }
    return root
  };