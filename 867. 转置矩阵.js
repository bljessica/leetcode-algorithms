/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
  const rows = matrix.length, cols = matrix[0].length
  const res = Array.from(new Array(cols), () => new Array(rows).fill(0))
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      res[j][i] = matrix[i][j]
    }
  }
  return res
};