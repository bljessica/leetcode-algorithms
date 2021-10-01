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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  const set = new Set()
  function dfs(node, curPathArr = []) {
    if (!node) {
      return
    }
    let arr = []
    if (curPathArr.length) {
      arr = curPathArr.slice()
    }
    arr.push(node.val)
    if (!node.left && !node.right) {
      set.add(arr)
    }
    if (node.left) {
      dfs(node.left, arr)
    }
    if (node.right) {
      dfs(node.right, arr)
    }
  }
  dfs(root)
  arr = Array.from(set)
  return arr.map(pathArr => pathArr.join('->'))
};