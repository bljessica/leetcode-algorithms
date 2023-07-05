/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const queue = [root]
    const res = []
    while (queue.length) {
      const len = queue.length
      const arr = []
      for (let i = 0; i < len; i++) {
        const node = queue.shift()
        arr.push(node.val)
        for (const child of node.children) {
          queue.push(child)
        }
      }
      res.push(arr)
    }
    return res
  };