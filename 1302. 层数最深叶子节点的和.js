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
var deepestLeavesSum = function(root) {
    let sum = 0, depth = -1
    const dfs = (node, curDepth) => {
      if (!node) return
      if (!node.left && !node.right) { // 叶子节点
        if (curDepth > depth) {
          depth = curDepth
          sum = node.val
        } else if (curDepth === depth){
          sum += node.val
        }
      } else {
        dfs(node.left, curDepth + 1)
        dfs(node.right, curDepth + 1)
      }
    }
    dfs(root, 0)
    return sum
  };