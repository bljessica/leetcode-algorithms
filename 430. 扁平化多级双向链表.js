/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function(head) {
  function dfs(node) {
    let cur = node
    let last = null
    while (cur) {
      const next = cur.next 
      if (cur.child) {
        const childLast = dfs(cur.child)
        // 将node与child相连
        cur.next = cur.child
        cur.child.prev = cur
        if (next) {
          childLast.next = next
          next.prev = childLast
        }
        cur.child = null
        last = childLast
      } else {
        last = cur
      }
      cur = next
    }
    return last
  }
  dfs(head)
  return head
};