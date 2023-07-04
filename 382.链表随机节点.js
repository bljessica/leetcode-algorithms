/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head
    let p = head, len = 0
    while (p) {
      p = p.next
      len++
    }
    this.len = len
  };
  
  /**
   * @return {number}
   */
  Solution.prototype.getRandom = function() {
    const idx = Math.floor(Math.random() * this.len)
    let p = this.head
    for (let i = 0; i < idx; i++) p = p.next
    return p.val
  };
  
  /**
   * Your Solution object will be instantiated and called as such:
   * var obj = new Solution(head)
   * var param_1 = obj.getRandom()
   */