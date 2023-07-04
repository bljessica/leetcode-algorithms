/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let max = 0
    const len = words.length
    const masks = new Array(len).fill(0)
    for (let i = 0; i < len; i++) {
      const word = words[i]
      for (let j = 0; j < word.length; j++) {
        masks[i] |= 1 << (word[j].charCodeAt() - 'a'.charCodeAt())
      }
    }
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (!(masks[i] & masks[j])) max = Math.max(max, words[i].length * words[j].length)
      }
    }
    return max
  };
  