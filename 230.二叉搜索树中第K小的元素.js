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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const nums = []
    const dfs = (root) => {
        if (!root) return
        dfs(root.left)
        nums.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return nums[k - 1]
};