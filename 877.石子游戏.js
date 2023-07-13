/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const len = piles.length
    const dp = new Array(len).fill(0)
    for (let i = 0; i < len; i++) {
      dp[i] = piles[i]
    }
    for (let i = len - 1; i >= 0; i--) {
      for (let j = i + 1; j < len; j++) {
        dp[j] = Math.max(piles[i] - dp[i + 1], piles[j] - dp[j - 1])
      }
    }
    return dp[len - 1]
  };