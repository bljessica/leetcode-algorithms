/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0, j = 0
    while (i < s.length) {
      while (j < t.length && t[j] !== s[i]) j++
      if (j === t.length) return false
      i++
      j++
    }
    return true
  };