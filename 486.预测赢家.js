/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const n = nums.length
    const memory = new Array(n).fill(0).map(() => new Array(n))
    const getMaxWinNum = (l, r) => {
      if (l === r) return nums[l]
      if (memory[l][r] !== undefined) return memory[l][r]
      const max = Math.max(nums[l] - getMaxWinNum(l + 1, r), nums[r] - getMaxWinNum(l, r - 1))
      memory[l][r] = max
      return max
    }
    const x = getMaxWinNum(0, n - 1) >= 0
    return x
  };