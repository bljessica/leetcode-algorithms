/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let res = 0
    const n = grid.length
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        res += grid[i][j] > 0 ? 4 * grid[i][j] + 2 : 0
        res -= j + 1 < n ? 2 * Math.min(grid[i][j], grid[i][j + 1]) : 0
        res -= i + 1 < n ? 2 * Math.min(grid[i][j], grid[i + 1][j]) : 0
      }
    }
    
    return res
  };