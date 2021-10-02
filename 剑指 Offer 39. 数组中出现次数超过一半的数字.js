/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let major = nums[0], times = 0
  for(let num of nums) {
    if (times === 0) {
      major = num
    }
    if (major === num) {
      times++
    } else {
      times--
    }
  }
  return major
};