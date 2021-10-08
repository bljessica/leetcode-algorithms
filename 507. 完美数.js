/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function(num) {
  if (num === 1) {
    return false
  }
  const maxIdx = Math.sqrt(num)
  let sum = 0
  for (let i = 1; i <= maxIdx; i++) {
    const n = num / i
    if (Math.floor(n) === n) {
      sum += i + n
    }
  }
  return sum - num === num
};