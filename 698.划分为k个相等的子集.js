/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const totalSum = _.sum(nums)
    if (totalSum % k !== 0) return false
    nums.sort((a, b) => a - b)
    const len = nums.length
    const per = totalSum / k
    if (nums[len - 1] > per) return false
    const dp = new Array(1 << len).fill(true) // 每个元素的每位表示nums中第i个数是否被使用过，true则未使用
    const dfs = (s, sum) => {
      if (!s) return true
      if (!dp[s]) return false
      dp[s] = false // 标为已访问
      for (let i = 0; i < len; i++) {
        if (sum + nums[i] > per) return false
        if (s & (1 << i)) { // 第i位没被访问，则置0
        // 取余的作用是当填满一个集合时，将cur重置为0
          if (dfs(s ^ (1 << i), (sum + nums[i]) % per)) return true 
        }
      }
      return false
    }
    return dfs((1 << len) - 1, 0)
  };