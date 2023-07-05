/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let res = 0
    const len = nums.length
    const dfs = (idx, curSum) => {
      if (idx === len) {
        if (curSum === target) res++
        return
      }
      dfs(idx + 1, curSum + nums[idx])
      dfs(idx + 1, curSum - nums[idx])
    }
    dfs(0, 0)
    return res
  };