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
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
  function findLeafs(node, arr) {
    if (!node.left && !node.right) {
      arr.push(node.val)
    }
    if (node.left) {
      findLeafs(node.left, arr)
    }
    if (node.right) {
      findLeafs(node.right, arr)
    }
  } 
  const leaves1 = [], leaves2 = []
  findLeafs(root1, leaves1)
  findLeafs(root2, leaves2)
 return leaves1.toString() === leaves2.toString()
};