/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var threeConsecutiveOdds = function(arr) {
  let start = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] & 1) { // 奇数
    if (start === -1) {
      start = i
    } else {
      if (i - start === 2) {
        return true
      }
    }
    } else { // 偶数
      start = -1
    }
  }
  return false
};