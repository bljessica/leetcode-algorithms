/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
  const len = s.length
  const dp = new Array(26).fill(0)
  for (let i = 0; i < len; i++) {
    dp[s[i].charCodeAt() - 'a'.charCodeAt()] = dp.reduce((res, cur) => (res + cur) % (1e9 + 7), 1)
  }
  return dp.reduce((res, cur) => (res + cur) % (1e9 + 7))
};