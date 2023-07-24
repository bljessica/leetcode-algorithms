/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    const dp = [0]
    let oneNum = ~~(s[0] === '1')
    for (let i = 1; i < s.length; i++) {
      if (s[i] === '1') {
        dp[i] = dp[i - 1]
        oneNum++
      } else dp[i] = Math.min(dp[i - 1] + 1, oneNum)
    }
    return dp[s.length - 1]
  };