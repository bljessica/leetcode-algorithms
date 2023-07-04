/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length
    if (len < 2) return 0
    const dp = new Array(len)
    for (let i = 0; i < len; i++) dp[i] = new Array(2).fill(0)
    dp[0][1] = -prices[0]
    dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1])
    dp[1][1] = Math.max(dp[0][0] - prices[1], dp[0][1])
    for (let i = 2; i < len; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
      dp[i][1] = Math.max(dp[i - 2][0] - prices[i], dp[i - 1][1])
    }
    return Math.max(...dp[len - 1])
  };