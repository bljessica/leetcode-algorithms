/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let res = 0
    const m = strs.length, n = strs[0].length
    for (let j = 0; j < n; j++) {
      for (let i = 1; i < m; i++) {
        if (strs[i][j] < strs[i - 1][j]) {
          res++
          break
        }
      }
    }
    return res
  };