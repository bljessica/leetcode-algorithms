/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    const m = arr.length, n = pieces.length
    const map = new Map()
    for (let i = 0; i < n; i++) map.set(pieces[i][0], i)
    let i = 0
    while (i < m) {
      if (!map.has(arr[i])) return false
      const piecesIdx = map.get(arr[i]), len = pieces[piecesIdx].length
      for (let j = 0; j < len; j++) {
        if (arr[i + j] !== pieces[piecesIdx][j]) return false
      }
      i += len
    }
    return true
  };