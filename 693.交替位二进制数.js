/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let isPos = null
    while (n) {
      if (isPos == null) isPos = (n & 1) ? true : false
      else {
        if (isPos == (n & 1)) return false
        isPos = !isPos
      }
      n >>>= 1
    }
    return true
  };