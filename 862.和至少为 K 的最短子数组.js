/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const len = nums.length
    const preSum = new Array(len + 1).fill(0)
    for (let i = 0; i < len; i++) {
      preSum[i + 1] = preSum[i] + nums[i]
    }
    const q = []
    let res = len + 1
    for (let i = 0; i < len + 1; i++) {
      const cur = preSum[i]
      while (q.length && cur - preSum[q[0]] >= k) {
        res = Math.min(res, i - q.shift())
      }
      while (q.length && preSum[q[q.length - 1]] >= cur) q.pop()
      q.push(i)
    }
    return res > len ? -1 : res
  };