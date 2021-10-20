/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
  const m = image.length, n = image[0].length
  const oldColor = image[sr][sc]
  if (oldColor === newColor) {
    return image
  }
  const fill = (r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || image[r][c] !== oldColor) {
      return
    }
    image[r][c] = newColor
    fill(r - 1, c)
    fill(r + 1, c)
    fill(r, c - 1)
    fill(r, c + 1)
  }
  fill(sr, sc)
  return image
};