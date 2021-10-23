/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 var numberOfLines = function(widths, s) {
  let lineNum = 1, wordsNum = 0
  for (const c of s) {
    const len = widths[c.charCodeAt() - 97]
    wordsNum += len
    if (wordsNum > 100) {
      lineNum++
      wordsNum = len
    }
  }
  return [lineNum, wordsNum]
};