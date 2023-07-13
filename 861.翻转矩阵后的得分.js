/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    const m = grid.length, n = grid[0].length
    let res = m * (1 << (n - 1))
    for (let j = 1; j < n; j++) {
      let zeroNum = 0
      for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) { // 这行翻转了
          zeroNum += grid[i][j]
        } else { // 这行没翻转
          zeroNum += 1 - grid[i][j]
        }
      }
      const max = Math.max(zeroNum, m - zeroNum)
      res += max * (1 << (n - j - 1))
    }
    return res
  };