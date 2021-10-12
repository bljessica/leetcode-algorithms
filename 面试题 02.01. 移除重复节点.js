/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var removeDuplicateNodes = function(head) {
  const dummy = new ListNode(0)
  dummy.next = head
  let p = dummy
  const map = {}
  while (p && p.next) {
    let key = String(p.next.val)
    let isNextDup = map[key]
    while (isNextDup) { // 删除节点
      p.next = p.next.next
      if (p.next) {
        key = String(p.next.val)
        isNextDup = map[key]
      } else {
        break
      }
    } 
    map[key] = true
    p = p.next
  }
  return dummy.next
};