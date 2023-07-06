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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    const map = new Map()
    const dfs = (node) => {
      if (!node) return 0
      const cur = node.val + dfs(node.left) + dfs(node.right)
      map.get(cur) ? map.set(cur, map.get(cur) + 1) : map.set(cur, 1)
      return cur
    }
    dfs(root)
    let maxCnt = 0
    for (const v of map.values()) {
      maxCnt = Math.max(maxCnt, v)
    }
    const res = []
    map.forEach((v, k) => {
      if (v === maxCnt) res.push(k)
    })
    return res
  };