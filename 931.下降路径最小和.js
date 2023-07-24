/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const n = matrix.length
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for (let j = 0; j < n; j++) {
      dp[0][j] = matrix[0][j]
    }
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let min = dp[i - 1][j]
        if (j > 0) min = Math.min(min, dp[i - 1][j - 1])
        if (j < n - 1) min = Math.min(min, dp[i - 1][j + 1])
        dp[i][j] = matrix[i][j] + min
      }
    }
    return Math.min(...dp[n - 1])
  };