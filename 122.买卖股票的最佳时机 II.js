/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0], maxProfit = 0
    let i = 0
    const len = prices.length
    while (i < len) {
      while (i + 1 < len && prices[i + 1] <= prices[i]) i++ // 找到极小值
      minPrice = prices[i]
      while (i + 1 < len && prices[i + 1] >= prices[i]) i++ // 找到极大值
      maxProfit += prices[i] - minPrice
      if (i === len - 1) break
    }
    return Math.max(maxProfit, prices[len - 1] - prices[0], 0)
  };