/**
 * @param {character[][]} board
 * @return {number}
 */
 var numRookCaptures = function(board) {
  let rookRow = 0, rookCol = 0
  const rows = board.length, cols = board[0].length
  let res = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'R') {
        rookRow = i
        rookCol = j
        break
      }
    }
  }
  for (let i = rookRow - 1; i >= 0; i--) {
    if (board[i][rookCol] === 'B') {
      break
    } else if (board[i][rookCol] === 'p') {
      res++
      break
    }
  }
  for (let i = rookRow + 1; i < rows; i++) {
    if (board[i][rookCol] === 'B') {
      break
    } else if (board[i][rookCol] === 'p') {
      res++
      break
    }
  }
  for (let j = rookCol - 1; j >= 0; j--) {
    if (board[rookRow][j] === 'B') {
      break
    } else if (board[rookRow][j] === 'p') {
      res++
      break
    }
  }
  for (let j = rookCol + 1; j < cols; j++) {
    if (board[rookRow][j] === 'B') {
      break
    } else if (board[rookRow][j] === 'p') {
      res++
      break
    }
  }
  return res
};