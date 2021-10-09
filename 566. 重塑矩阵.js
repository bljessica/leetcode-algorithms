/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
  const rows = mat.length, cols = mat[0].length
  if (rows * cols !== r * c) {
    return mat
  }
  const res = Array.from(new Array(r), () => new Array(c).fill(0))
  let m = 0, n = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) { 
      res[m][n++] = mat[i][j]
      if (n === c) {
        m++
        n = 0
      }
    }
  }
  return res
};