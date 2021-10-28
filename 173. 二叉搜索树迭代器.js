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
 */
 var BSTIterator = function(root) {
  this.idx = -1
  this.arr = []
  inoderTraversal(this.arr, root)
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.arr[++this.idx]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.idx >= this.arr.length - 1 ? false : true
};

function inoderTraversal(arr, node) {
  if (!node) {
    return
  }
  inoderTraversal(arr, node.left)
  arr.push(node.val)
  inoderTraversal(arr, node.right)
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */