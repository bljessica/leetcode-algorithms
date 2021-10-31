/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var swapNodes = function(head, k) {
  const dummy = new ListNode(-1)
  dummy.next = head
  let fast = slow = dummy
  for (let i = 0; i < k; i++) {
    fast = fast.next
  }
  const nodeK = fast
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  const tmp = nodeK.val
  nodeK.val = slow.val
  slow.val = tmp
  return dummy.next
};