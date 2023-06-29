/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length, n = board[0].length
    const dfs = (i, j, wordLeft, path) => {
      if (!wordLeft.length) return true
      if (i < 0 || i >= m || j < 0 || j >= n) return false
      if (board[i][j] !== wordLeft[0]) return false
      if (path.indexOf(i + ',' + j) !== -1) return false
      const newWordLeft = wordLeft.slice(1)
      path += i + ',' + j
      return dfs(i - 1, j, newWordLeft, path) || dfs(i + 1, j, newWordLeft, path)
        || dfs(i, j - 1, newWordLeft, path) || dfs(i, j + 1, newWordLeft, path)
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (dfs(i, j, word, '')) return true
      }
    }
    return false
  };