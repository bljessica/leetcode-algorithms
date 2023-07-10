/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let wrongNum = 0
    const len = nums.length
    for (let i = 0; i + 1 < len; i++) {
      if (nums[i] > nums[i + 1]) {
        wrongNum++
        if (wrongNum > 1) return false
        if (nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]) return false
      }
    }
    return true
  };