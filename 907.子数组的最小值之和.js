/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let res = 0
    const len = arr.length
    for (let i = 0; i < len; i++) {
      let min = arr[i]
      for (let j = i; j < len; j++) {
        min = Math.min(min, arr[j])
        res += min
      }
    }
    return res % (1e9 + 7)
  };