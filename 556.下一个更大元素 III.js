/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    const arr = [...('' + n)]
    const len = arr.length
    let i = len - 2
    while (i >= 0 && arr[i] >= arr[i + 1]) i--
    if (i < 0) return -1
    let j = len - 1
    while (j > i && arr[j] <= arr[i]) j--
    [arr[i], arr[j]] = [arr[j], arr[i]]
    // 将i后调整为递增
    i++
    j = len - 1
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
    const num = parseInt(arr.join(''))
    const MAX = Math.pow(2, 31) - 1
    return num > MAX ? -1 : num
  };