/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    const len = nums.length
    let i = 0, res = 0, mul = 1
    for (let j = 0; j < len; j++) {
      mul *= nums[j]
      while (i <= j && mul >= k) {
        mul /= nums[i++]
      }
      res += j - i + 1
    }
    return res
  };