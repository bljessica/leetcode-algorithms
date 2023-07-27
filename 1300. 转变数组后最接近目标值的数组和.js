/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    arr.sort((a, b) => a - b)
    const len = arr.length
    let sum = 0
    for (let i = 0; i < len; i++) {
      const val = (target - sum) / (len - i)
      if (val < arr[i]) return Math.round(val - 0.1)
      sum += arr[i]
    }
    return arr[len - 1]
  };