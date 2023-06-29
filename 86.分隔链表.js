/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const smallDummy = new ListNode(-1), largeDummy = new ListNode(-1)
    let p = smallDummy, q = largeDummy
    while (head) {
      if (head.val < x) {
        p.next = head
        p = p.next
      } else {
        q.next = head
        q = q.next
      }
      head = head.next
    }
    q.next = null
    p.next = largeDummy.next
    return smallDummy.next
  };