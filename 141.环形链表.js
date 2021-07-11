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
 var hasCycle = function(head) {
  // 1.快慢指针
  // if (!head) {
  //   return false
  // }
  // let slow = head, fast = head
  // while(fast && fast.next) {
  //   slow = slow.next
  //   fast = fast.next.next
  //   if (slow === fast) {
  //     return true
  //   }
  // }
  // return false
  // 2.js对象不能内循环
  try {
    JSON.stringify(head)
    return false
  } catch {
    return true
  }
};