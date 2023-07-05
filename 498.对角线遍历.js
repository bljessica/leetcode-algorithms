/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const m = mat.length, n = mat[0].length
    const diaNum = m + n - 1
    const res = []
    for (let k = 0; k < diaNum; k++) {
      if (k % 2 === 0) { // 向上
        for (let i = Math.min(k, m - 1); i >= 0; i--) {
          const j = k - i
          if (j < 0 || j >= n) continue
          res.push(mat[i][j])
        }
      } else { // 向下
        for (let i = 0; i <= k && i < m; i++) {
          const j = k - i
          if (j < 0 || j >= n) continue
          res.push(mat[i][j])
        }
      }
    }
    return res
  };