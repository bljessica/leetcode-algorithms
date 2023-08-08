/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    const len = arr.length
    arr.sort((a, b) => a - b)
    let sum = 0
    const start = Math.floor(len / 20)
    const end = len - start - 1
    for (let i = start; i <= end; i++) sum += arr[i]
    return sum / (end - start + 1)
  };