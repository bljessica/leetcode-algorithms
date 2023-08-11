/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = ''
    const len1 = word1.length
    const len2 = word2.length
    let i = j = 0
    while (i < len1 && j < len2) {
      res += word1[i++] + word2[j++]
    }
    if (i < len1) res += word1.slice(i)
    if (j < len2) res += word2.slice(j)
    return res
  };