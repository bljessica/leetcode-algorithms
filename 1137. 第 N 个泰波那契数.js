/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n <= 1) return n
    if (n === 2) return 1
    let a0 = 0, a1 = 1, a2 = 1, res = 0, i = 2
    while (i < n) {
      res = a0 + a1 + a2
      a0 = a1
      a1 = a2
      a2 = res
      i++
    }
    return res
  };