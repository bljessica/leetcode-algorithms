/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const len = nums.length
    const dpMax = new Array(len).fill(0), dpMin = new Array(len).fill(0)
    dpMax[0] = dpMin[0] = nums[0]
    for (let i = 1; i < len; i++) {
      const cur = nums[i]
      dpMax[i] = Math.max(dpMax[i - 1] * cur, dpMin[i - 1] * cur, cur)
      dpMin[i] = Math.min(dpMax[i - 1] * cur, dpMin[i - 1] * cur, cur)
    }
    return Math.max(...dpMax)
  };