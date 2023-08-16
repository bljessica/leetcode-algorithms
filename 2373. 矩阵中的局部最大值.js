/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const n = grid.length
    const mat = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0))
    for (let i = 0; i < n - 2; i++) {
      for (let j = 0; j < n - 2; j++) {
        for (let k = 0; k < 3; k++) {
          for (let m = 0; m < 3; m++) {
            mat[i][j] = Math.max(mat[i][j], grid[i + k][j + m])
          }
        }
      }
    }
    return mat
  };