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
 * @return {boolean}
 */
var isValidBST = function(root) {
	function dfs(node, lower, upper) {
		if (!node) return true
		if (node.val <= lower || node.val >= upper) return false
		return dfs(node.left, lower, node.val) && dfs(node.right, node.val, upper)
	}
	return dfs(root, -Infinity, Infinity)
};