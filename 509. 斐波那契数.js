/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  if (n === 0 || n === 1) {
    return n
  }
  let a1 = 0, a2 = 1
  let res = 0
  for (let i = 0; i < n - 1; i++) {
    res = a1 + a2
    a1 = a2
    a2 = res
  }
  return res
};