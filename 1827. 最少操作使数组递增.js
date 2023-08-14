/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0
    let pre = nums[0]
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > pre) {
        pre = nums[i]
      } else {
        res += (++pre) - nums[i]
      }
    }
    return res
  };