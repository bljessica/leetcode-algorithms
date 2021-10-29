/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
  const m = board.length, n = board[0].length
  const arr = new Array(m + 2).fill(0).map(() => new Array(n + 2).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[i + 1][j + 1] = board[i][j]
    }
  }
  const calcNeighborActiveNum = (i, j) => {
    return arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i][j + 1] + arr[i + 2][j + 1] + arr[i][j + 2] + arr[i + 1][j + 2] + arr[i + 2][j + 2]
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = calcNeighborActiveNum(i, j)
      if (board[i][j]) {
        if (num < 2 || num > 3) {
          board[i][j] = 0
        } 
      } else {
        if (num === 3) {
          board[i][j] = 1
        }
      }
    }
  }
};