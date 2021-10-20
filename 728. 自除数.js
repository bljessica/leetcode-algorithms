/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
  function isDivisor(num) {
    let tmp = num
    const digits = []
    while (tmp !== 0) {
      digits.push(tmp % 10)
      tmp = Math.floor(tmp / 10)
    }
    for (const digit of digits) {
      if (num % digit !== 0) {
        return false
      }
    }
    return true
  }
  const res = []
  for (let i = left; i <= right; i++) {
    if (isDivisor(i)) {
      res.push(i)
    }
  }
  return res
};