/**
 * @param {number[]} arr
 * @return {number}
 */
 var longestMountain = function(arr) {
  let max = 0
  const len = arr.length
  for (let i = 1; i < len - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let m = i - 1, n = i + 1
      while (m >= 1 && arr[m] > arr[m - 1]) {
        m--
      }
      while (n + 1 < len && arr[n] > arr[n + 1]) {
        n++
      }
      max = Math.max(max, n - m + 1)
    }
  }
  return max
};