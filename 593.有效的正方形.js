/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    const dots = [p1, p2, p3, p4]
    const dist = (p1, p2) => {
      return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2))
    }
    const set = new Set()
    for (let i = 0; i < 4; i++) {
      for (let j = i + 1; j < 4; j++) {
        if (dots[i][0] === dots[j][0] && dots[i][1] === dots[j][1]) return false
        set.add(dist(dots[i], dots[j]))
      }
    }
    return set.size === 2
  };