/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  const reverse = (start, end) => {
    while (start < end) {
      [nums[start++], nums[end--]] = [nums[end], nums[start]]
    }
  }
  const len = nums.length
  k %= len
  reverse(0, len - 1)
  reverse(0, k - 1)
  reverse(k, len - 1)
};