/**
 * @param {number} num
 * @return {string}
 */
 var toHex = function(num) {
  if (num === 0) {
    return '0'
  }
  const res = []
  for (let i = 7; i >= 0; i--) {
    const val = (num >> (4 * i)) & 0xf
    if (val > 0 || res.length) {
      const digit = val < 10 ? String.fromCharCode('0'.charCodeAt() + val)
        : String.fromCharCode('a'.charCodeAt() + val - 10)
        res.push(digit)
    }
  }
  return res.join('')
};