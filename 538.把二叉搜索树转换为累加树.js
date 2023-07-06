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
var convertBST = function(root) {
    let prevSum = 0, i = 0
    const res = []
    const dfs = (node, isFill=false) => {
      if (!node) return
      dfs(node.right, isFill)
      if (isFill) {
        node.val = res[i++]
      } else {
        prevSum += node.val
        res.push(prevSum)
      }
      dfs(node.left, isFill)
    }
    dfs(root)
    dfs(root, true)
    return root
  };