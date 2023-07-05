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
    const s1 = [], s2 = []
    while (l1) {
      s1.push(l1.val)
      l1 = l1.next
    }
    while (l2) {
      s2.push(l2.val)
      l2 = l2.next
    }
    let carry = 0, res = []
    const dummy = new ListNode(-1)
    let p = dummy
    while (s1.length || s2.length) {
      let num = (s1.length ? s1.pop(): 0) + (s2.length? s2.pop(): 0) + carry
      if (num > 9) {
        num -= 10
        carry = 1
      } else {
        carry = 0
      }
      res.push(num)
    }
    if (carry) res.push(carry)
    res = res.reverse()
    for (const num of res) {
      p.next = new ListNode(num)
      p = p.next
    }
    return dummy.next
  };