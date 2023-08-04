/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let res = ''
    let i = 0
    while (i < s.length) {
      if (i + 2 < s.length && s[i + 2] === '#') {
        res += String.fromCharCode('a'.charCodeAt() + parseInt(s.slice(i, i + 2)) - 1)
        i += 3
      } else {
        res += String.fromCharCode('a'.charCodeAt() + parseInt(s.slice(i, i + 1)) - 1)
        i++
      }
    }
    return res
  };