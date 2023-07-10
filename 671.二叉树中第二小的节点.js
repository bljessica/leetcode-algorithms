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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let min = root.val, second = -1
    const dfs = (node) => {
      if (!node) return
      if (node.val < min) {
        second = min
        min = node.val
      } else if (node.val > min && (second === -1 || node.val < second)) {
        second = node.val
      }
      dfs(node.left)
      dfs(node.right)
    }
    dfs(root)
    return second
  };