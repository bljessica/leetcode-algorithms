/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let count = 0;
    let dummy = new ListNode(0);
    dummy.next = head;
    let [start, end] = [dummy, dummy.next];
    while(end) {
        count++;
        if(count % k === 0) {
            start = reverseList(start, end.next);
            end = start.next;
        }
        else {
            end = end.next;
        }
    }
    return dummy.next;

    function reverseList(start, end) {
        let [pre, cur] = [start, start.next];
        let first = cur;
        while(cur != end) {
            let next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        start.next = pre;
        first.next = cur;
        return first;
    }
};