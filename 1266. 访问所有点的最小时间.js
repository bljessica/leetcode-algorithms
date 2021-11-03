/**
 * @param {number[][]} points
 * @return {number}
 */
 var minTimeToVisitAllPoints = function(points) {
  let res = 0
  for (let i = 1; i < points.length; i++) {
    const [lastX, lastY] = points[i - 1], [x, y] = points[i]
    if (lastX === x) {
      res += Math.abs(y - lastY)
    } else if (lastY === y) {
      res += Math.abs(x - lastX)
    } else {
      res += Math.max(Math.abs(y - lastY), Math.abs(x - lastX))
    }
  }
  return res
};