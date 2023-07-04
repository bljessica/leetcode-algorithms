/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let res = 1, k = 0, cnt = n, step = 1
    while (cnt > 1) {
      if (k % 2 === 0) { // 正向
        res = res + step
      } else { // 反向
        res = cnt % 2 === 0 ? res : res + step
      }
      k++
      cnt >>= 1
      step <<= 1
    }
    return res
  };