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
 var deleteDuplicates = function(head) {
  const dummy = new ListNode(101)
  dummy.next = head
  let p = dummy
  while (p && p.next) {
    const cur = p
    while (p.next && p.next.next && p.next.val === p.next.next.val) {
      p = p.next
    }
    if (cur.val !== p.val) {
      cur.next = p.next.next
      p = cur
    } else {
      p = p.next
    }
  }
  return dummy.next
};