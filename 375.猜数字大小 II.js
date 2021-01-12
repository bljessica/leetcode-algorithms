/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  let dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER))
  dp[0][1] = 0
  for (let i = 0; i < n + 1; i++) {
    dp[i][i] = 0
  }
  for (let i = n; i >= 0; i--) {
    for (let j = i + 1; j < n + 1; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], Math.max(dp[i][k - 1], dp[k + 1][j]) + k)
      }
    }
  }
  return dp[0][n]
};