/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
  const dummy = new ListNode(-1) 
  dummy.next = head
  let p = dummy
  while (p.next) {
    if (p.next.val !== val) {
      p = p.next
    } else {
      p.next = p.next.next
      break
    }
  }
  return dummy.next
};