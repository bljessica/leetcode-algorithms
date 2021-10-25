/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
  const res = []
  const words1 = s1.split(' '), words2 = s2.split(' ')
  const getWords = (words1, words2) => {
    for (const word of words1) {
      const num = words1.reduce((res, cur) => {
        if (cur === word) {
          res++
        }
        return res
      }, 0)
      if (num === 1 && !words2.includes(word)) {
        res.push(word)
      }
    }
  }
  getWords(words1, words2)
  getWords(words2, words1)
  return res
};