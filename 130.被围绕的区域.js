/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // X为海水，O为岛屿，NO为非岛屿
    const m = board.length, n = board[0].length
    const dfs = (i, j) => {
      if (i < 0 || i >= m || j < 0 || j >= n) return
      if (board[i][j] === 'O') {
        board[i][j] = 'NO' // 遇到O，染为NO
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
      }
    }
    // 从边界开始搜索
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if ((i === 0 || i === m - 1 || j === 0 || j === n - 1) && board[i][j] === 'O') {
          dfs(i, j) 
        }
      }
    }
    // 填充O和X
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 'NO') board[i][j] = 'O'
        else if (board[i][j] === 'O') board[i][j] = 'X'
      }
    }
  };