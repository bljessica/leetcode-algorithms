/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let nearestIdx = 0
    const len = arr.length
    for (let i = 1; i < len; i++) {
      if (Math.abs(arr[i] - x) < Math.abs(arr[nearestIdx] - x)) nearestIdx = i
      
    }
    const res = []
    res.push(arr[nearestIdx])
    let i = nearestIdx - 1, j = nearestIdx + 1
    while (res.length < k) {
      const l = i >= 0 ? Math.abs(arr[i] - x) : Infinity
      const r = j < len ? Math.abs(arr[j] - x) : Infinity
      if (l <= r) res.push(arr[i--])
      if (l > r) res.push(arr[j++])
    }
    return res.sort((a, b) => a - b)
  };