/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const map = new Map()
    for (const arr of wall) {
      let sum = arr[0]
      for (let i = 1; i < arr.length; i++) {
        if (map.has(sum)) map.set(sum, map.get(sum) + 1)
        else map.set(sum, 1)
        sum += arr[i]
      }
    }
    let maxCnt = 0
    for (const cnt of map.values()) {
      maxCnt = Math.max(maxCnt, cnt)
    }
    return wall.length - maxCnt
  };