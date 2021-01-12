/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (!root) return []
  let queue = [root]
  let res = []
  while (queue.length) {
    let len = queue.length
    let tmpArr = []
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      tmpArr.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    const sum = tmpArr.reduce((acc, val) => acc + val)
    res.push(sum / tmpArr.length)
  }
  return res
};