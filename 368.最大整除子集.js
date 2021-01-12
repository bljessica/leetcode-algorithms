/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  nums.sort((a, b) => a - b) // 保证大的在后面
  let dp = []
  dp[0] = [nums[0]]
  let maxSetIdx = 0
  for (let i = 1; i < nums.length; i++) {
    const preLen = dp.length
      // 能否加入现有的集合
      for (let j = preLen - 1; j >= 0; j--) {
          if (nums[i] % dp[j][dp[j].length - 1] === 0) {
              if (dp[j].length + 1 >= dp[maxSetIdx].length) {
                dp.push([...dp[j], nums[i]])
                maxSetIdx = dp.length - 1
              }
          }
      }
      // 不能加入现有集合，则作为新集合
      if (dp.length === preLen) {
        dp.push([nums[i]])
      }
  }
  return dp[maxSetIdx]
};