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
var swapPairs = function(head) {
    let dummy = new ListNode(0), prev = dummy;
    dummy.next = head;
    while(head && head.next) {
        let next = head.next;
        head.next = next.next;
        next.next = head;
        prev.next = next;
        //更新
        prev = head;
        head = head.next;
    }
    return dummy.next;
};