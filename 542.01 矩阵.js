/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length, n = mat[0].length
    const res = new Array(m).fill(0).map(() => new Array(n).fill(Infinity))
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (!mat[i][j]) {
          res[i][j] = 0
          continue
        }
        if (i > 0) res[i][j] = Math.min(res[i][j], res[i - 1][j] + 1)
        if (j > 0) res[i][j] = Math.min(res[i][j], res[i][j - 1] + 1)
      }
    }
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (i + 1 < m) res[i][j] = Math.min(res[i][j], res[i + 1][j] + 1)
        if (j + 1 < n) res[i][j] = Math.min(res[i][j], res[i][j + 1] + 1)
      }
    }
    return res
  };