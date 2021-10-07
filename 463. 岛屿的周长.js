/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
  let res = 0
  const rows = grid.length, cols = grid[0].length
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j]) {
        res += 4
        if (i > 0 && grid[i - 1][j]) {
          res -= 1
        }
        if (i + 1 < rows && grid[i + 1][j]) {
          res -= 1
        }
        if (j > 0 && grid[i][j - 1]) {
          res -= 1
        }
        if (j + 1 < cols && grid[i][j + 1]) {
          res -= 1
        }
      }
    }
  }
  return res
};