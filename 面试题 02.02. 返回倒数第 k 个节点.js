/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 var kthToLast = function(head, k) {
  let len = 0
  let p = head
  while (p) {
    p = p.next
    len++
  }
  p = head
  for (let i = 0; i < len - k; i++) {
    p = p.next
  }
  return p.val
};