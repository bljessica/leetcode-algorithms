/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
 var isCovered = function(ranges, left, right) {
  for (let i = left; i <= right; i++) {
    if (!ranges.some(([x, y]) => x <= i && y >= i)) {
      return false
    }
  }
  return true
};