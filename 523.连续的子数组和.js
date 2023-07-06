/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    if (nums.length < 2) return false
    const map = new Map()
    map.set(0, -1)
    let remainder = 0
    for (let i = 0; i < nums.length; i++) {
      remainder = (remainder + nums[i]) % k
      if (map.has(remainder)) {
        if (i - map.get(remainder) >= 2) return true
      } else {
        map.set(remainder, i)
      }
    }
    return false
  };