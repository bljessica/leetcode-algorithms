/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // 贪心
    const len = nums.length
    let pos = len - 1, steps = 0
    while (pos > 0) {
      for (let i = 0; i < len; i++) { // 找到距离目标点最远（最小）的索引
        if (i + nums[i] >= pos) {
          pos = i
          steps++
          break
        }
      }
    }
    return steps
    // 动态规划
    // const len = nums.length
    // const dp = new Array(len - 1)
    // dp[0] = 0
    // for (let i = 1; i < len; i++) {
    //   let min = Infinity
    //   for (let j = 0; j < i; j++) {
    //     if (j + nums[j] >= i) min = Math.min(min, dp[j] + 1)
    //   }
    //   dp[i] = min
    // }
    // return dp[len - 1]
  };