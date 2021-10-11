/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
  let count = 1, max = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++
      max = Math.max(count, max)
    } else {
      count = 1
    }
  }
  return max
};
