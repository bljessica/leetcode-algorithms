/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1] 
  let res = [[1]]
  for(let i = 1; i <= rowIndex; i++) {
      let tmp = [1]
      for(let j = 1; j < i; j++) {
          tmp.push(res[i - 1][j - 1] + res[i - 1][j])
      }
      tmp.push(1)
      res.push(tmp)
  }
  return res[rowIndex]
};