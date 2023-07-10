/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    let i = 1, j = n, idx = 1, pre = false
    const res = []
    while (idx < k) {
      if (pre) res.push(j--)
      else res.push(i++)
      pre = !pre
      idx++
    }
    if (pre) {
      while (i <= j) res.push(j--)
    } else {
      while (i <= j) res.push(i++)
    }
    return res
  };