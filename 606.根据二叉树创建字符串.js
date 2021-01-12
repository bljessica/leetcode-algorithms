/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if (t === null) return ''
  let res = ''
  function dfs(root) {
    let queue = [root]
    while(queue.length) {
      let node = queue.shift()
      res += node.val
      if (node.left) {
        res += '('
        dfs(node.left)
        res += ')'
      }
      if (node.right) {
        if (!node.left) res += '()'
        res += '('
        dfs(node.right)
        res += ')'
      }
    }
  }
  dfs(t)
  return res
};