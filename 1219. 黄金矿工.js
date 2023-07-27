/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    const m = grid.length, n = grid[0].length
    const DIRS = [[0, 1], [0, -1], [-1, 0], [1, 0]]
    const dfs = (i, j) => {
      if (i < 0 || j < 0 || i === m || j === n || !grid[i][j]) return 0
      const cur = grid[i][j]
      grid[i][j] = 0
      let max = cur
      for (const [r, c] of DIRS) {
        max = Math.max(max, dfs(i + r, j + c) + cur)
      }
      grid[i][j] = cur
      return max
    }
    let res = 0
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        res = Math.max(res, dfs(i, j))
      }
    }
    return res
  };