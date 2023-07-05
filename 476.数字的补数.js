/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let res = 0, digit = 0
    while (num) {
      const last = num & 1
      res += Math.pow(2, digit++) * (last ? 0 : 1)
      num >>>= 1
    }
    return res
  };