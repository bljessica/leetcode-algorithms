/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    nums.sort((a, b) => a - b)
    let min = nums[0], res = 0
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > min) min = nums[i]
      else {
        min++
        res += min - nums[i]
      }
    }
    return res
  };