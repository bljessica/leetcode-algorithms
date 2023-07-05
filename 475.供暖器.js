/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let max = 0
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)
    for (let i = j = 0; i < houses.length; i++) {
      let curDis = Math.abs(heaters[j] - houses[i])
      while (j < heaters.length - 1 && Math.abs(heaters[j] - houses[i]) >= Math.abs(heaters[j + 1] - houses[i])) {
        j++
        curDis = Math.min(curDis, Math.abs(heaters[j] - houses[i]))
      }
      max = Math.max(max, curDis)
    }
    return max
  };