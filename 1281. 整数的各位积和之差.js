/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
  const digits = []
  while (n !== 0) {
    digits.push(n % 10)
    n = Math.floor(n / 10)
  }
  let sum = 0, mul = 1
  digits.forEach(digit => {
    sum += digit
    mul *= digit
  })
  return mul - sum
};