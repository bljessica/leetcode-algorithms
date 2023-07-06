/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const res = new Set()
    const visited = new Set()
    for (const num of nums) {
      if (visited.has(num - k)) res.add(num - k)
      if (visited.has(num + k)) res.add(num)
      visited.add(num)
    }
    return res.size
  };