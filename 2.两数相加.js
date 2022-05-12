/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode(-1)
  let p = dummy
  let carry = 0
  while (l1 || l2 || carry) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = Math.floor(sum / 10)
    p.next = new ListNode(sum % 10)
    p = p.next
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  return dummy.next
};