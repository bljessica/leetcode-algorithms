/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  // 1.递归
  // if (!root) return []
  // let res = []
  // function dfs(node) {
  //   if (!node) return
  //   res.push(node.val)
  //   if (node.children !== []) {
  //     for(let i in node.children) {
  //       dfs(node.children[i])
  //     }
  //   }
  // }
  // dfs(root)
  // return res
  // 2.迭代
  if (!root) return []
  let res = []
  let queue = [root]
  while (queue.length) {
    const node = queue.shift()
    res.push(node.val)
    if (node.children.length) {
      queue = node.children.concat(queue)
    }
  }
  return res
};