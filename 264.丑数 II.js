/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = new Array(n + 1).fill(0)
    dp[1] = 1
    let p1 = p2 = p3 = 1
    for (let i = 2; i <= n; i++) {
      dp[i] = Math.min(2 * dp[p1], 3 * dp[p2], 5 * dp[p3])
      if (dp[i] === 2 * dp[p1]) p1++
      if (dp[i] === 3 * dp[p2]) p2++
      if (dp[i] === 5 * dp[p3]) p3++
    }
    return dp[n]
  };