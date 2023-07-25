/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    const stack = []
    const res = []
    let idx = 0
    while (head) {
      res.push(0)
      while (stack.length && head.val > stack[stack.length - 1][0]) {
        res[stack.pop()[1]] = head.val
      }
      stack.push([head.val, idx++])
      head = head.next
    }
    return res
  };