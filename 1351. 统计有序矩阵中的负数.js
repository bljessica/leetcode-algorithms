/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
  // 从右上角开始遍历
  const rows = grid.length, cols = grid[0].length
  let i = 0, j = cols - 1
  let res = 0
  while (i < rows && cols >= 0) {
    while (grid[i][j] < 0) {
      j--
      res++
    }
    i++
    j = cols - 1
  }
  return res
};