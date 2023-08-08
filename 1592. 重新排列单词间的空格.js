/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let spaceNum = 0
    for (const c of text) {
      if (c == ' ') spaceNum++
    }
    const words = text.split(' ').filter(w => w.length)
    const wordsNum = words.length
    if (wordsNum === 1) return words[0] + ' '.repeat(spaceNum)
    const spaceNumEach = Math.floor(spaceNum / (wordsNum - 1))
    const lastSpaceNum = spaceNum - spaceNumEach * (wordsNum - 1)
    return words.join(spaceNumEach ? ' '.repeat(spaceNumEach) : '') + (lastSpaceNum ? ' '.repeat(lastSpaceNum) : '')
  };