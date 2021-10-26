/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
  if (!root) {
    return null
  }
  const layerNodes = []
  const queue = [root]
  while (queue.length) {
    const len = queue.length
    const nodes = []
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      nodes.push(node)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    layerNodes.push(nodes)
  }
  layerNodes.forEach(nodes => {
    const len = nodes.length
    for (let i = 0; i < len - 1; i++) {
      nodes[i].next = nodes[i + 1]
    }        
    nodes[len - 1].next = null                                                                     
  })
  return root
};