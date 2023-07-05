/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const arr = []
    // 先序遍历
    const dfs = (root) => {
      if (!root) return
      arr.push(root.val)
      dfs(root.left)
      dfs(root.right)
    }
    dfs(root)
    return arr.join(',')
  };
  
  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  var deserialize = function(data) {
    if (!data) return null
    const arr = data.split(',').map(item => parseInt(item)) // 先序遍历
    const midArr = arr.slice().sort((a, b) => a - b) // 中序遍历
    const buildTree = (arr, midArr) => {
      if (!arr.length) return null
      const root = new TreeNode(arr[0])
      const idx = midArr.indexOf(arr[0])
      root.left = buildTree(arr.slice(1, idx + 1), midArr.slice(0, idx))
      root.right = buildTree(arr.slice(idx + 1), midArr.slice(idx + 1))
      return root
    }
    return buildTree(arr, midArr)
  };
  
  /**
   * Your functions will be called as such:
   * deserialize(serialize(root));
   */