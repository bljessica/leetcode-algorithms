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
var deleteDuplicates = function(head) {
    if (head === null) {
        return null
    }
    let dummy = new ListNode(0)
    dummy.next = head
    let p = dummy
    while (p && p.next) {
        let next = p.next
        while (next && next.next && next.val === next.next.val) {
            next = next.next
        }
        if (dummy === p) {
            dummy.next = next
        }
        p.next = next
        p = p.next
    }
    return dummy.next
};