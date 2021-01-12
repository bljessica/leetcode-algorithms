/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  // 1.递归
  // if (!root) return []
  // let res = []
  // function dfs(node) {
  //   if (!node) return
  //   for (let i in node.children) {
  //     dfs(node.children[i])
  //   }
  //   res.push(node.val)
  // }
  // dfs(root)
  // return res
  // 2.迭代
  if (!root) return []
  let res = []
  let stack = [root]
  while(stack.length) {
    let node = stack.pop()
    if (node) res.unshift(node.val)
    if (node.children) {
      stack.push(...node.children)
    }
  }
  return res
};