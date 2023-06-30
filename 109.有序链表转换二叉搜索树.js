/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const nums = []
    while (head) {
      nums.push(head.val)
      head = head.next
    }
    const buildTree= (l, r) => {
      if (l > r) return null
      const mid = Math.floor((l + r) / 2)
      const node = new TreeNode(nums[mid])
      node.left = buildTree(l, mid - 1)
      node.right = buildTree(mid + 1, r)
      return node
    }
    return buildTree(0, nums.length - 1)
  };