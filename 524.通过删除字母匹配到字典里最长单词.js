/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    dictionary.sort((a, b) => {
      if (a.length === b.length) return a.localeCompare(b)
      return b.length - a.length
    })
    for (const word of dictionary) {
      let i = j = 0
      while (i < word.length && j < s.length) {
        while (j < s.length && s[j] !== word[i]) j++
        if (j >= s.length) break
        i++
        j++
      }
      if (i === word.length) return word
    }
    return ''
  };