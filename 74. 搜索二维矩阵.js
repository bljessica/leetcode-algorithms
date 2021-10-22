/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  const rows = matrix.length, cols = matrix[0].length
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