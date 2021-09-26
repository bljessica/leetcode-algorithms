/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
  if (n === 0) {
    return 1
  }
  if (n === 1 || n === 2) {
    return n
  }
  let a1 = 1, a2 = 2
  let res = 0
  for (let i = 3; i <= n; i++) {
    res = (a1 + a2) % 1000000007
    a1 = a2
    a2 = res
  }
  return res;
};