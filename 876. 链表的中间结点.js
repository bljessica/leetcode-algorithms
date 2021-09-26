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
 var middleNode = function(head) {
  let len = 0
  let p = head
  while (p) {
    p = p.next
    len++
  }
  p = head
  const midStep = Math.floor(len / 2)
  for (let i = 0; i < midStep; i++) {
    p = p.next
  }
  return p
};