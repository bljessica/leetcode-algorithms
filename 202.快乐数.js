/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = 0
    const set = new Set()
    while (true) {
      sum = 0
      while (n) {
        const num = n % 10
        sum += Math.pow(num, 2)
        n = Math.floor(n / 10)
      }
      if (sum === 1) return true
      if (set.has(sum)) return false
      set.add(sum)
      n = sum
    }
  };