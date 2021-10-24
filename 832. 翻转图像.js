/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
  const m = image.length, n = image[0].length
  const res = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[i][n - j - 1] = image[i][j] ? 0 : 1
    }
  }
  return res
};