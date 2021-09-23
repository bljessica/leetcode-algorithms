/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
  const rows = matrix.length
  if (rows === 0) {
    return false
  }
  const cols = matrix[0].length
  let i = rows - 1, j = 0
  while (i >= 0 && j < cols) {
    if (matrix[i][j] === target) {
      return true
    } else if (matrix[i][j] < target) {
      j++
    } else {
      i--
    }
  }
  return false
};