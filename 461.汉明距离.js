/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let res = 0
    while (x || y) {
      if ((x ^ y) & 1) {
        res++
      }
      x >>>= 1
      y >>>= 1
    }
    return res
  };