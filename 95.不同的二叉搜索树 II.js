/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    return buildTree(1, n)
  };
  
  
  const buildTree = (l, r) => {
    if (l > r) return [null]
    const res = []
    for (let i = l; i <= r; i++) { // 根节点
      const leftTree = buildTree(l, i - 1)
      const rightTree = buildTree(i + 1, r)
      for (const ln of leftTree) {
        for (const rn of rightTree) {
          const root = new TreeNode(i)
          root.left = ln
          root.right = rn
          res.push(root)
        }
      }
    }
    return res
  }