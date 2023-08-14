/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    word = word.replace(/[^0-9]/g, ' ')
    return new Set(word.split(' ').filter(s => s.length).map(s => {
      let i = -1
      while (i + 1 < s.length && s[i + 1] === '0') i++
      return s.slice(i + 1)
    })).size
  };