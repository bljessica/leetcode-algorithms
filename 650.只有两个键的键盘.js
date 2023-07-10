/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = dp[1] = 0
    for (let i = 2; i <= n; i++) {
      for (let j = 1; j * j <= i; j++) {
        if (i % j === 0) {
          dp[i] = Math.min(dp[i], dp[i / j] + j, dp[j] + i / j)
        }
      }
    }
    return dp[n]
  };  