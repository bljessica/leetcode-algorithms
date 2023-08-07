/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const len = prices.length
    const res = []
    for (let i = 0; i < len; i++) {
      let cur = prices[i]
      for (let j = i + 1; j < len; j++) {
        if (prices[j] <= cur) {
          cur -= prices[j]
          break
        }
      }
      res.push(cur)
    }
    return res
  };