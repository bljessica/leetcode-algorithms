/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  if (!head) {
    return null
  }
  let fast = head, slow = head
  while (fast) {
    slow = slow.next
    if (fast.next) {
      fast = fast.next.next
    } else {
      return null
    }
    if (fast === slow) {
      let p = head
      while (p !== slow) {
        p = p.next
        slow = slow.next
      }
      return p
    }
  }
  return null
};