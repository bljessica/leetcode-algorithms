/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (!num) return '0'
    let res = ''
    let isNeg = false
    if (num < 0) {
      isNeg = true
      num = -num
    }
    while (num) {
      res = num % 7 + res
      num = Math.floor(num / 7)
    }
    return isNeg ? '-' + res : res
  };