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
    let p = l1, q = l2;
    let k = new ListNode(0), dummy = k;
    let carry = 0;
    while(p || q) {
        let val1 = p? p.val: 0;
        let val2 = q? q.val: 0;
        let val = val1 + val2 + carry;
        if(val > 9) {
            val -= 10;
            carry = 1;
        }
        else {
            carry = 0;
        }
        k.next = new ListNode(val);
        k = k.next;
        if(p) {
            p = p.next;
        }
        if(q) {
            q = q.next;
        }
    }
    if(carry) {
        k.next = new ListNode(1);
    }
    return dummy.next;
};