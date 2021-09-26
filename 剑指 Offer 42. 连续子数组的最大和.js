/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let maxSum = nums[0], preSum = 0
  nums.forEach(num => {
    preSum = Math.max(preSum + num, num)
    maxSum = Math.max(maxSum, preSum)
  })
  return maxSum
};