/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
  let res = []
  let w = words[0]
  for (const c of w) {
    if (words.every(word => word.indexOf(c) !== -1)) {
      words = words.map(word => word.replace(c, ''))
      res.push(c)
    }
  }
  return res
};