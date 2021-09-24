/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  const res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let left = 0, right = n - 1, top = 0, bottom = n - 1
  let idx = 1
  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col++) {
      res[top][col] = idx++
    }
    for (let row = top + 1; row <= bottom; row++) {
      res[row][right] = idx++
    }
    if (left < right && top < bottom) {
      for (let col = right - 1; col >= left; col--) {
        res[bottom][col] = idx++
      }
      for (let row = bottom - 1; row > top; row--) {
        res[row][left] = idx++
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }
  return res
};