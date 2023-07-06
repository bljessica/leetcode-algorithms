/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort((a, b) => a - b)
    const len = nums.length
    if (nums[0] === nums[len - 1]) return 0
    let l = 0, r = 1
    let res = 0
    while (r < len) {
      while (nums[r] - nums[l] > 1) l++
      if (nums[r] - nums[l] === 1) {
        res = Math.max(res, r - l + 1)
      }
      r++
    }
    return res
  };