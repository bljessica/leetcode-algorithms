/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = nums[0], second = Number.MAX_SAFE_INTEGER
    for (const num of nums) {
      if (num > second) return true
      else if (num > first) second = num
      else first = num
    }
    return false
  }