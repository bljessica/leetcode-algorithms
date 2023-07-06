/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0, r = nums.length - 1
    while (l < r) {
      const mid = (l + r) >>> 1
      if (nums[mid] === nums[mid ^ 1]) l = mid + 1
      else r = mid
    }
    return nums[l]
  };