/**
 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
  let absentNum = 0, currContinousLateNum = 1
  let flag = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      absentNum++
    } else if (i > 0 && s[i] === 'L' && s[i - 1] === 'L') {
      currContinousLateNum++
      if (currContinousLateNum === 3) {
        flag = true
      }
    } else {
      currContinousLateNum = 1
    }
  }
  if (absentNum >= 2 || flag) {
    return false
  }
  return true
};