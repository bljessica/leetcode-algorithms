/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    while (n >= 4) {
      n /= 4
      if (n - Math.floor(n) > 1e-6) return false
    }
    return n === 1
  };