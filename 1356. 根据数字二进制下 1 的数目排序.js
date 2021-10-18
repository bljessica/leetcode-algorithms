/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {
  function calcDigitOneNum(num) {
    let res = 0
    while (num !== 0) {
      if (num & 1) {
        res++
      }
      num = num >> 1
    }
    return res
  }
  arr.sort((a, b) => {
    const digitDiff = calcDigitOneNum(a) - calcDigitOneNum(b)
    if (digitDiff === 0) {
      return a - b
    } else {
      return digitDiff
    }
  })
  return arr
};