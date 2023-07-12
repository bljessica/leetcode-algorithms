/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let res = 0
    const len = s.length, cache = {}
    for (const word of words) {
      if (cache[word]) {
        res++
        continue
      }
      let i = 0, isSubSeq = true
      for (const c of word) {
        while (i < len && s[i] !== c) i++
        if (i >= len) {
          isSubSeq = false
          break
        }
        i++
      }
      if (isSubSeq) {
        res++
        cache[word] = true
      } else {
         cache[word] = false
      }
    }
    return res
  };