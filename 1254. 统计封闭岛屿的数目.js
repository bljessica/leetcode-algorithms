/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const m = grid.length, n = grid[0].length
    const DIRS = [[0, 1], [0, -1], [-1, 0], [1, 0]]
    const dfs = (i, j) => {
      if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j]) return
      grid[i][j] = 1
      for (const [r, c] of DIRS) {
        dfs(i + r, j + c)
      }
    }
    // 把四周的岛屿都淹没为海洋
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
          !grid[i][j] && dfs(i, j)
        }
      }
    }
    let res = 0
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (!grid[i][j]) {
          res++
          dfs(i, j)
        }
      }
    }
    return res
  };