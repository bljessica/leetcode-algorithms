/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let dummy = new ListNode(-1)
    let p = dummy
    dummy.next = head
    while (dummy) {
        let next = dummy.next
        while (next && next.val === val) {
            next = next.next
        }
        dummy.next = next
        dummy = dummy.next
    }
    return p.next
};