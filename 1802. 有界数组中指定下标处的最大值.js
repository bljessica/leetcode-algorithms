/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    let l = 1, r = maxSum
    while (l < r) {
      const mid = (l + r + 1) >>> 1
      if (isValid(mid, index, maxSum, n)) l = mid
      else r = mid - 1
    }
    return l
  };
  
  const isValid = (idxVal, idx, maxSum, n) => {
    return idxVal + calcOneSideSum(idxVal, idx) // 左侧
      + calcOneSideSum(idxVal, n - idx - 1) <= maxSum // 右侧
  }
  
  const calcOneSideSum = (idxVal, len) => { // 不包括中间值的单边和
    if (len + 1 < idxVal) { // 不会减到1
      return (idxVal - 1 + idxVal - len) * len / 2
    } else { // 会减到1
      return (idxVal) * (idxVal - 1) / 2 + (len - idxVal + 1)
    }
  }