/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const len = nums.length
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j <= i + k && j < len; j++) {
        if (nums[i] === nums[j]) return true
      }
    }
    return false
  };