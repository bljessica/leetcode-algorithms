/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()
    for (const n of arr) {
      if (map.get(n)) map.set(n, map.get(n) + 1)
      else map.set(n, 1)
    }
    return new Set(map.values()).size === map.size
  };