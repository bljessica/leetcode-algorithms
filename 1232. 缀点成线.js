/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
 var checkStraightLine = function(coordinates) {
  const [x1, y1] = coordinates[0], [x2, y2] = coordinates[1]
  if (coordinates.every(co => co[0] === x1) || coordinates.every(co => co[1] === y1)) {
    return true
  }
  const k = (y2 - y1) / (x2 - x1), b = y1 - x1 * k
  for (let i = 2; i < coordinates.length; i++) {
    if (coordinates[i][1] !== coordinates[i][0] * k + b) {
      return false
    }
  }
  return true
};