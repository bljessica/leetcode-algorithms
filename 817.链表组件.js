/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
    let res = 0, pre = head.val, i = 0
    while (head) {
      const idx = nums.indexOf(head.val)
      if (idx !== -1) {
        if (i === 0) res++
        else if (!nums.includes(pre)) res++
      }
      pre = head.val
      head = head.next
      i++
    }
    return res
  };