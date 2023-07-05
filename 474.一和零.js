/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const len = strs.length
    const strCharNum = new Array(len)
    for (let i = 0; i < len; i++) {
      let zeroNum = 0
      for (const c of strs[i]) {
        if (c === '0') zeroNum++
      }
      strCharNum[i] = [zeroNum, strs[i].length - zeroNum]
    }
    const dp = new Array(len + 1).fill(0).map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)))
    for (let i = 1; i <= len; i++) {
      const zNum = strCharNum[i - 1][0], oNum = strCharNum[i - 1][1]
      for (j = 0; j <= m; j++) {
        for (let k = 0; k <= n; k++) {
          dp[i][j][k] = dp[i - 1][j][k]
          if (j >= zNum && k >= oNum) {
            dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zNum][k - oNum] + 1)
          } 
        }
      }
    }
    return dp[len][m][n]
  };