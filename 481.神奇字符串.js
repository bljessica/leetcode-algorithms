/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
    if (n < 4) return 1
    let str = '122'
    let oneNum = 1, curIdx = 2, fillIdx = 3
    while (fillIdx < n) {
      const fillChar = str[fillIdx - 1] === '1' ? '2' : '1'
      let fillNum = parseInt(str[curIdx])
      while (fillNum && fillIdx < n) {
        str += fillChar
        if (fillChar === '1') oneNum++
        fillNum--
        fillIdx++
      }
      curIdx++
    }
    return oneNum
  };