/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0
    for (let i = 0; i < 32; i++) {
      res <<= 1
      if (n & 1) res += 1
      n >>= 1
    }
    return res >>> 0 // 保证为征整数
  };