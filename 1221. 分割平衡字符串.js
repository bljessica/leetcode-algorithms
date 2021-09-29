/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
  let res = 0, d = 0
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === 'L') {
      d++
    } else {
      d--
    }
    if (d === 0) {
      res++
    }
  }
  return res
};