/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0;
    let p = head;
    while(p) {
        len++;
        p = p.next;
    }
    if(n === len) {
        return head.next;
    }
    p = head;
    for(let i = 0; i < len - n - 1; i++) {
        p = p.next;
    }
    p.next = p.next.next;
    return head;
};