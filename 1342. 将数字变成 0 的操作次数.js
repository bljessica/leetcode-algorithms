/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let res = 0
    while (num) {
      if (num & 1) {
        num--
      } else {
        num /= 2
      }
      res++
    }
    return res
  };