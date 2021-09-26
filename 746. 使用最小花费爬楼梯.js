/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  const len = cost.length
  let pre = cur = 0
  let res = 0
  for (let i = 2; i <= len; i++) {
    res = Math.min(pre + cost[i - 2], cur + cost[i - 1])
    pre = cur
    cur = res
  }
  return res
};