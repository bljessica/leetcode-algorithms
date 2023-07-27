/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let oddSum = 0, evenSum = 0
    for (const p of position) {
      if (p & 1) oddSum++
      else evenSum++
    }
    return Math.min(oddSum, evenSum)
  };