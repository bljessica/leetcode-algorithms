/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let cNum = 0, nNum = 0
    let res = ''
    const isNum = (c) => (c >= '0' && c <= '9')
    for (const c of s) {
      if (isNum(c)) nNum++
      else cNum++
    }
    if (Math.abs(cNum - nNum) > 1) return ''
    let isC = cNum >= nNum
    let cIdx = 0, nIdx = 0
    while (cIdx < s.length || nIdx < s.length) {
      while (cIdx < s.length && isNum(s[cIdx])) cIdx++
      while (nIdx < s.length && !isNum(s[nIdx])) nIdx++
      if (cIdx < s.length && isC) res += s[cIdx++]
      else if (nIdx < s.length) res += s[nIdx++]
      isC = !isC
    }
    return res
  };