/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const m = board.length, n = board[0].length
    const dx = [-1, 1, 0, 0, -1, -1, 1, 1]
    const dy = [0, 0, -1, 1, -1, 1, -1, 1]
    const dfs = (r, c) => {
      if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'E') return 
      let num = 0
      for (let i = 0; i < dx.length; i++) {
        if (r + dx[i] >= 0 && r + dx[i] < m && c + dy[i] >= 0 && c + dy[i] < n 
          && board[r + dx[i]][c + dy[i]] === 'M') {
            num++
          }
      }
      if (num === 0) {
        board[r][c] = 'B'
        for (let i = 0; i < dx.length; i++) {
          dfs(r + dx[i], c + dy[i])
        }
      } else {
        board[r][c] = '' + num
      }
    }
    if (board[click[0]][click[1]] === 'M') {
      board[click[0]][click[1]] = 'X'
    } else {
      dfs(click[0], click[1])
    }
    return board
  };