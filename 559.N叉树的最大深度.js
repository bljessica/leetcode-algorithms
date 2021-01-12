/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  function getDepth(node, depth) {
    if (!node) {
      return depth
    } 
    if (node.children.length) {
      let max = 0
      for (let i in node.children) {
        max = Math.max(max, getDepth(node.children[i], depth + 1))
      }
      return max
    } else {
      return depth + 1
    }
  }
  return getDepth(root, 0)
};