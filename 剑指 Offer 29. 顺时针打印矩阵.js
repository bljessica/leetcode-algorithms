/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  const rows = matrix.length
  if (!rows) {
    return []
  }
  const cols = matrix[0].length
  let left = 0, right = cols - 1, top = 0, bottom = rows - 1
  const res = []
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    for (let j = top + 1; j <= bottom; j++) {
      res.push(matrix[j][right])
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i >= left; i--) {
        res.push(matrix[bottom][i])
      }
      for (let j = bottom - 1; j > top; j--) {
        res.push(matrix[j][left])
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }
  return res
};