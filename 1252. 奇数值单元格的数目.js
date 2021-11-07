/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
 var oddCells = function(m, n, indices) {
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (const indice of indices) {
    for (let j = 0; j < n; j++) {
      matrix[indice[0]][j] += 1
    }
    for (let i = 0; i < m; i++) {
      matrix[i][indice[1]] += 1
    }
  }
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] & 1) {
        res++
      }
    }
  }
  return res
};