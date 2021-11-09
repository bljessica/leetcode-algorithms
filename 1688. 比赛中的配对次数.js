/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
  let res = 0
  while (n > 1) {
    const next = Math.floor(n / 2)
    res += next
    n = n - next
  }
  return res
};