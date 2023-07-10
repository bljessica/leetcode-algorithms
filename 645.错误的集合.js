/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const res = new Array(2).fill(0)
    res[1] = 1
    nums.sort((a, b) => a - b)
    const len = nums.length
    for (let i = 0; i < len; i++) {
      if (i > 0) {
        if (nums[i] === nums[i - 1]) res[0] = nums[i]
        else if (nums[i] - nums[i - 1] > 1) res[1] = nums[i - 1] + 1
      }
    }
    if (nums[len - 1] !== len) res[1] = len
    return res
  };