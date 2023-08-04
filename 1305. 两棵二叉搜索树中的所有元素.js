/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const res = []
    const arr1 = dfs(root1, [])
    const arr2 = dfs(root2, [])
    let i = j = 0
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) res.push(arr1[i++])
      else res.push(arr2[j++])
    }
    while (i < arr1.length) res.push(arr1[i++])
    while (j < arr2.length) res.push(arr2[j++])
    return res
  };
  
  const dfs = (root, arr) => {
    if (!root) return arr
    dfs(root.left, arr)
    arr.push(root.val)
    dfs(root.right, arr)
    return arr
  }