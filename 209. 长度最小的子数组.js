/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  const len = nums.length
  let maxLen = len + 1
  let i = 0, j = 0
  let sum = 0
  while (j < len) {
    sum += nums[j++]
    while (sum >= target) {
      maxLen = Math.min(maxLen, j - i)
      sum -= nums[i++]
    }
  }
  return maxLen > len ? 0 : maxLen
};