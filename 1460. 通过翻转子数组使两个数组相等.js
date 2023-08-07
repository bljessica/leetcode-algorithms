/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const map = new Map()
    for (const num of target) {
      if (!map.has(num)) map.set(num, 1)
      else map.set(num, map.get(num) + 1)
    }
    for (const num of arr) {
      if (!map.has(num)) return false
      const count = map.get(num)
      if (count === 0) return false
      map.set(num, count - 1)
    }
    for (const [_, v] of map) {
      if (v > 0) return false
    }
    return true
  };