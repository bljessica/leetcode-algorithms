/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [] 
  let res = [[1]]
  if (numRows === 1) return res
  for(let i = 1; i < numRows; i++) {
      let tmp = [1]
      for(let j = 1; j < i; j++) {
          tmp.push(parseInt(res[i - 1][j - 1] + res[i - 1][j]))
      }
      tmp.push(1)
      res.push(tmp)
  }
  return res
};