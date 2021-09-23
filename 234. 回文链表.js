/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  const totalLen = arr.length
  const halfLen = Math.floor(arr.length / 2)
  for (let i = 0; i < halfLen; i++) {
    if (arr[i] !== arr[totalLen - i - 1]) {
      return false
    }
  }
  return true
};