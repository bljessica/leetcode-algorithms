/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  nums = Array.from(new Set(nums))
  nums.sort((a, b) => a - b)
  const len = nums.length
  let startIdx = 0
  let flag = false
  let max = 1
  for (let i = 1; i < len; i++) {
    if (!flag && nums[i] - nums[i - 1] === 1) {
      flag = true
      startIdx = i - 1
    }
    if (flag && nums[i] - nums[i - 1] !== 1) {
      flag = false
      max = Math.max(max, i - startIdx)
    }
  }
  if (flag) {
    max = Math.max(max, len - startIdx)
  }
  return max
};