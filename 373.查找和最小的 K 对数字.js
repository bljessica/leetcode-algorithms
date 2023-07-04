/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const queue = new MaxPriorityQueue({ priority: t => t[0] + t[1] })
    for (const n1 of nums1) {
      for (const n2 of nums2) {
        const item = [n1, n2]
        queue.enqueue(item)
        if (queue.size() > k) {
          if (queue.dequeue().element == item) break
        }
      }
    }
    return queue.toArray().map(i => i.element).reverse()
  };