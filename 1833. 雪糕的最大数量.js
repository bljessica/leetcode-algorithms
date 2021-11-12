/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
 var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b)
  let res = 0
  let curCost = 0, i = 0
  while (curCost + costs[i] <= coins) {
    res++
    curCost += costs[i++]
  }
  return res
};