/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
  let curNum = 1
  let res = 0
  while (n >= curNum) {
    n -= curNum++
    res++
  }
  return res
};