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
 var rotateRight = function(head, k) {
  if (!head || !k) {
    return head
  }
  let len = 0
  let p = head, tail = head
  while (p) {
    if (!p.next) {
      tail = p
    }
    p = p.next
    len++
  }
  k = k % len
  p = head
  if (k === 0) {
    return head
  }
  for (let i = 0; i < len - k - 1; i++) {
    p = p.next
  }
  const h = p.next
  p.next = null
  tail.next = head
  return h
};