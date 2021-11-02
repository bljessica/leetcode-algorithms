/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] < 0 && k > 0) {
        nums[i] *= -1
        k--
    }
  }
  if (k % 2 === 1) {
    nums[len - 1] *= -1
  }
  return nums.reduce((res, cur) => res + cur, 0)
};