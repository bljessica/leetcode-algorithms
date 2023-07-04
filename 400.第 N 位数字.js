/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let digit = 1
    while (n > 0) {
      if (n > digit * 9 * Math.pow(10, digit - 1)) {
        n -= digit * 9 * Math.pow(10, digit - 1)
        digit++
      } else {
        const num = Math.floor(n / digit)
        if (n % digit === 0) return String(Math.pow(10, digit - 1) + num - 1)[digit - 1]
        return String(Math.pow(10, digit - 1) + num)[n % digit - 1]
      }
    }
  };