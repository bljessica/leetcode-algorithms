/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return []
  }
  let res = []
  let rows = matrix.length, cols = matrix[0].length
  let left = 0, right = cols - 1, top = 0, bottom = rows - 1
  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col++) {
      res.push(matrix[top][col])
    }
    for (let row = top + 1; row <= bottom; row++) {
      res.push(matrix[row][right])
    }
    if (left < right && top < bottom) {
      for (let col = right - 1; col >= left; col--) {
        res.push(matrix[bottom][col])
      }
      for (let row = bottom - 1; row > top; row--) {
        res.push(matrix[row][left])
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }
  return res
};