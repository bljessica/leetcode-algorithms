/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    if (n === 1) return 0
    if (n & 1) return 2 + Math.min(integerReplacement(Math.floor(n / 2)), 
      integerReplacement(Math.floor(n / 2) + 1))
    return 1 + integerReplacement(n / 2)
  };