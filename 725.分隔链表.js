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
 * @return {ListNode[]}
 */
 var splitListToParts = function(head, k) {
  const arr = new Array(k).fill(null)
  let len = 0
  let cur = head
  while (cur) {
    cur = cur.next
    len++
  }
  const originLen = Math.floor(len / k)
  const left = len % k
  cur = head
  for(let i = 0; i < k && cur; i++) {
    arr[i] = cur
    const curItemLen = originLen + (i < left ? 1 : 0)
    for (let j = 0; j < curItemLen - 1; j++) {
      cur = cur.next
    }
    const next = cur.next
    cur.next = null
    cur = next
  } 
  return arr
};