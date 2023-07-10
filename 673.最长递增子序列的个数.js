/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const len = nums.length
    const dp = new Array(len).fill(0) // 以nums[i]结尾的子序列的最大长度
    const cnt = new Array(len).fill(0) // 以nums[i]结尾的子序列的最大长度对应的个数
    let maxLen = 0, maxCnt = 0
    for (let i = 0; i < len; i++) {
      dp[i] = 1
      cnt[i] = 1
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          if (dp[j] + 1 > dp[i]) {
            dp[i] = dp[j] + 1
            cnt[i] = cnt[j]
          } else if (dp[j] + 1 === dp[i]) {
            cnt[i] += cnt[j]
          }
        }
      }
      if (dp[i] > maxLen) {
        maxLen = dp[i]
        maxCnt = cnt[i]
      } else if (dp[i] === maxLen) {
        maxCnt += cnt[i]
      }
    }
    return maxCnt
  };