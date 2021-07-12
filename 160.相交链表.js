/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  // 1.暴力解法
  // let p = headB
  // while (headA) {
  //     while (p && p !== headA) {
  //         p = p.next
  //     }
  //     if (!p) {
  //         p = headB
  //         headA = headA.next
  //     } else {
  //         return p
  //     }
  // }
  // return null
  // 2. 哈希set
  // const visited = new Set()
  // while(headA) {
  //     visited.add(headA)
  //     headA = headA.next
  // }
  // while(headB) {
  //     if (visited.has(headB)) {
  //         return headB
  //     } else {
  //         headB = headB.next
  //     }
  // }
  // return null
  // 3. 双指针
  if (headA === null || headB === null) {
      return null
  }
  let pA = headA, pB = headB
  while (pA !== pB) {
      pA = pA === null ? headB : pA.next
      pB = pB === null ? headA : pB.next
  }
  return pA
};