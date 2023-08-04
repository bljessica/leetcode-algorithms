/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const visitedIdx = [start]
    const set = new Set()
    while (visitedIdx.length) {
      const len = visitedIdx.length
      for (let i = 0; i < len; i++) {
        const idx = visitedIdx.shift()
        if (set.has(idx)) continue
        set.add(idx)
        if (arr[idx] === 0) return true
        if (idx + arr[idx] < arr.length) visitedIdx.push(idx + arr[idx])
        if (idx - arr[idx] >= 0) visitedIdx.push(idx - arr[idx])
      }
    }
    return false
  };