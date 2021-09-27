/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      return i
    }
  }
  return -1
};