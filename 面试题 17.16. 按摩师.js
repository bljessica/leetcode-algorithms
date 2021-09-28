/**
 * @param {number[]} nums
 * @return {number}
 */
 var massage = function(nums) {
  if (!nums.length) {
    return 0
  }
  let dp0 = 0, dp1 = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const tmp = dp0
    dp0 = Math.max(tmp, dp1)
    dp1 = tmp + nums[i]
  }
  return Math.max(dp0, dp1)
};