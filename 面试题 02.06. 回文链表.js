/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
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
  const len = arr.length
  let i = 0, j = len - 1
  for (; i <= j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false
    }
  }
  return true
}; 