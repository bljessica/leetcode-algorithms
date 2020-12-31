/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return []
  let queue = []
  let res = []
  queue.push(root)
  while (queue.length) {
      let len = queue.length
      let arr = []
      for (let i = 0; i < len; i++) {
          let node = queue.shift()
          arr.push(node.val)
          if (node.left) queue.push(node.left)
          if (node.right) queue.push(node.right)
      }
      res.push(arr)
  }
  return res.reverse()
};