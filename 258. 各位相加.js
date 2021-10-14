/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
  let sum = num
  while (num > 9) {
    sum = 0
    while (num !== 0) {
      sum += num % 10
      num = Math.floor(num / 10)
    }
    num = sum
  }
  return sum
};