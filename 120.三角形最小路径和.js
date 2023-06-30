/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const len = triangle.length
    const dp = new Array(len)
    for (let i = 0; i < len; i++) {
      dp[i] = new Array(i + 1).fill(0)
    }
    dp[0][0] = triangle[0][0]
    for (let i = 1; i < len; i++) {
      for (let j = 0; j <= i; j++) {
        dp[i][j] = Math.min(j < i ? dp[i - 1][j] : Infinity, j > 0 ? dp[i - 1][j - 1] : Infinity)
          + triangle[i][j]
      }
    }
    return Math.min(...dp[len - 1])
  };