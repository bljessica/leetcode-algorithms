/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
  if (s[0] === '0') {
    return 0
  }
  const dp = [1, 1, ...new Array(s.length - 1).fill(0)]
  const len = dp.length
  for (let i = 2; i < len; i++) {
    const lastOne = s.slice(i - 1, i), lastTwo = s.slice(i - 2, i)
    if (lastOne >= 1 && lastOne <= 9) {
      dp[i] += dp[i - 1]
    }
    if (lastTwo >= 10 && lastTwo <= 26) {
      dp[i] += dp[i - 2]
    }
  }
  return dp[len - 1]
};