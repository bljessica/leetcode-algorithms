/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let max = nums[0], min = nums[0]
    const sum = _.sum(nums)
    const dpMax = [nums[0]], dpMin = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
      dpMax[i] = nums[i] + Math.max(dpMax[i - 1], 0)
      dpMin[i] = nums[i] + Math.min(dpMin[i - 1], 0)
      max = Math.max(max, dpMax[i])
      min = Math.min(min, dpMin[i])
    }
    return max < 0 ? max : Math.max(sum - min, max)
  };