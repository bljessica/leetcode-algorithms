/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    while (k-- > 0) {
      let tmp = null
      for (let i = 0; i < grid.length; i++) {
        grid[i].unshift(tmp)
        tmp = grid[i].pop()
      }
      grid[0][0] = tmp
    }
    return grid
  };