/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
  const len = s.length
  let i = 0, j = len - 1
  const arr = s.split('')
  const isCharacter = (c) => {
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
      return true
    }
    return false
  }
  while (i < j) {
    while (i < len && !isCharacter(s[i])) i++
    while (j >= 0 && !isCharacter(s[j])) j--
    if (i >= j) {
      break
    }
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }
  return arr.join('')
};