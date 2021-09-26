/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
  const len = nums.length
  const res = new Array(len).fill(nums[0])
  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] + nums[i]
  }
  return res
};