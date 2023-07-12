/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
    const grid = new Array(n).fill(1).map(() => new Array(n).fill(1))
    for (const [r, c] of mines) {
      grid[r][c] = 0
    }
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(n))
    let count = 0, max = 0
    for (let i = 0; i < n; i++) {
      count = 0
      for (let j = 0; j < n; j++) { // 左
        if (grid[i][j]) count++
        else count = 0
        dp[i][j] = Math.min(dp[i][j], count)
      }
      count = 0
      for (let j = n - 1; j >= 0; j--) { // 右
        if (grid[i][j]) count++
        else count = 0
        dp[i][j] = Math.min(dp[i][j], count)
      }
    }
    for (let j = 0; j < n; j++) {
      count = 0
      for (let i = 0; i < n; i++) { // 上
        if (grid[i][j]) count++
        else count = 0
        dp[i][j] = Math.min(dp[i][j], count)
      }
      count = 0
      for (let i = n - 1; i >= 0; i--) { // 下
        if (grid[i][j]) count++
        else count = 0
        dp[i][j] = Math.min(dp[i][j], count)
        max = Math.max(max, dp[i][j])
      }
    }
    return max
  };