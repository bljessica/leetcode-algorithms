/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let res = 0
    const m = grid.length, n = grid[0].length
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j]) res++
      }
      res += Math.max(...grid[i])
    }
    for (let j = 0; j < n; j++) {
      let max = 0
      for (let i = 0; i < m; i++) {
        max = Math.max(grid[i][j], max)
      }
      res += max
    }
    return res
  };