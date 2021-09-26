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
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  let len = 0
  let p = head
  let dummy = new ListNode(0)
  dummy.next = head
  while (p) {
    p = p.next
    len++
  }
  p = dummy 
  for (let i = 0; i < len - k; i++) {
    p = p.next
  }
  return p.next
};