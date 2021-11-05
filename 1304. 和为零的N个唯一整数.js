/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
  const res = []
  let i = n % 2 === 0 ? 1 : 0
  for (; i <= Math.floor(n / 2); i++) {
    res.push(i)
    if (i !== 0) {
      res.push(-i)
    }
  }
  return res
};