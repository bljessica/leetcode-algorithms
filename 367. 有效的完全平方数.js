/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
  for (let i = 1; i <= num; i++) {
    const mul = i * i
    if (mul === num) {
      return true
    } else if (mul > num) {
      break
    }
  }
  return false
};