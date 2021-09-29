/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
  const arr = s.split(' ')
  if (pattern.length !== arr.length) {
    return false
  }
  const map = {}
  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i]
    if (!map[c]) {
      const hasFlag = Object.values(map).some(str => str === arr[i])
      if (hasFlag) {
        return false
      }
      map[c] = arr[i]
    } else if (map[c] !== arr[i]) {
      return false
    }
  }
  return true
};