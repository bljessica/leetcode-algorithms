/**
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
  nums.sort((a, b) => a - b)
  let max = 0
  const len = nums.length
  for (let i = 0; i < len / 2; i++) {
    max = Math.max(max, nums[i] + nums[len - i - 1])
  }
  return max
};