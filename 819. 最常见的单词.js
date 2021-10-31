/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
  const words = paragraph.toLowerCase().match(/[a-zA-Z]+/g)
  const map = {}
  let max = 0, maxKey = ''
  for (const word of words) {
    if (!banned.includes(word)) {
      map[word] = map[word] === undefined ? 1 : map[word] + 1
      if (map[word] > max) {
        max = map[word]
        maxKey = word
      }
    }
  }
  return maxKey
};