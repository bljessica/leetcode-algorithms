/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let leftArrow = rightArrow = 0
    let res = []
    const leftArrowIdx = []
    for (const c of s) {
      if (c === ')' && leftArrow > rightArrow) {
        rightArrow++
        res.push(c)
      } else if (c === '(') {
        leftArrowIdx.push(res.length)
        leftArrow++
        res.push(c)
      } else if (c >= 'a' && c <= 'z'){
        res.push(c)
      }
    }
    for (let i = 0; i < leftArrow - rightArrow; i++) {
      res.splice(leftArrowIdx[leftArrowIdx.length - i - 1], 1)
    }
    return res.join('')
  };