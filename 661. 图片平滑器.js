/**
 * @param {number[][]} img
 * @return {number[][]}
 */
 var imageSmoother = function(img) {
  const rows = img.length, cols = img[0].length
  const res = Array.from(new Array(rows), () => new Array(cols).fill(0))
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let tmp = img[i][j]
      let num = 1
      if (i > 0) {
        tmp += img[i - 1][j]
        num++
        if (j > 0) {
          tmp += img[i - 1][j - 1]
          num++
        } 
        if (j + 1 < cols) {
          tmp += img[i - 1][j + 1]
          num++
        }
      }
      if (j > 0) {
        tmp += img[i][j - 1]
        num++
      } 
      if (j < cols - 1) {
        tmp += img[i][j + 1]
        num++
      }
      if (i + 1 < rows) {
        tmp += img[i + 1][j]
        num++
        if (j > 0) {
          tmp += img[i + 1][j - 1]
          num++
        } 
        if (j + 1 < cols) {
          tmp += img[i + 1][j + 1]
          num++
        }
      }
      res[i][j] = Math.floor(tmp / num)
    }
  }
  return res
};