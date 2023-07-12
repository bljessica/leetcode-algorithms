/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort((a, b) => {
      if (a.length === b.length) return b.localeCompare(a)
      return a.length - b.length
    })
    const set = new Set()
    set.add('')
    let res = ''
    for (const word of words) {
      if (set.has(word.slice(0, word.length - 1))) {
        set.add(word)
        res = word
      }  
    }
    return res
  };