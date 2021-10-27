/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
  const len = s.length
  const dp = new Array(len + 1).fill(false)
  const wordDictSet = new Set(wordDict)
  dp[0] = true // 空串
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.substring(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[len]
};