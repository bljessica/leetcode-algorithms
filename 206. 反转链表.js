/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if (!head) {
    return head
  }
  const dummy = new ListNode(-5001)
  dummy.next = head
  let p = dummy, next1 = p.next
  while (next1) {
    const next2 = next1.next
    next1.next = p.val === -5001 ? null : p
    p = next1
    next1 = next2
  }
  return p
};