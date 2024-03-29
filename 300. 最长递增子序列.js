/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  const len = nums.length
  const dp = new Array(len).fill(1)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  let res = 0
  for (const num of dp) {
    res = Math.max(num, res)
  }
  return res
};