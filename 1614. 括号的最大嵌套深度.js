/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
  let cur = 0, max = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      cur += 1
      max = Math.max(cur, max)
    } else if (s[i] === ')') {
      cur -= 1
    }
  }
  return max
};