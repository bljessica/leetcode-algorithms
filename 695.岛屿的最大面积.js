/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length, n = grid[0].length
    const DIRS = [[-1, 0], [1, 0], [0, 1], [0, -1]]
    const dfs = (i, j) => {
      if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== 1) return 0
      let sum = 1
      grid[i][j] = -1
      for (const [x, y] of DIRS) {
        sum += dfs(i + x, j + y)
      }
      return sum
    }
    let maxArea = 0
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
          maxArea = Math.max(maxArea, dfs(i, j))
        }
      }
    }
    return maxArea
  };