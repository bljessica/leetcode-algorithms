/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let max = 1
    const map = new Map()
    arr.forEach(v => {
      const cur = (map.get(v - difference) || 0) + 1
      map.set(v, cur)
      max = Math.max(cur, max)
    })
    return max
  };