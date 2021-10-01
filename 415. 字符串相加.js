/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
  let i = num1.length - 1, j = num2.length - 1
  const res = []
  let carry = 0
  while (i >= 0 || j >= 0 || carry) {
    const x = i >= 0 ? num1[i] - '0' : 0
    const y = j >= 0 ? num2[j] - '0' : 0
    const sum = x + y + carry
    res.push(sum % 10)
    carry = Math.floor(sum / 10)
    i--
    j--
  }
  return res.reverse().join('')
};