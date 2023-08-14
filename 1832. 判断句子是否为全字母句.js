/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if (sentence.length < 26) return false
    const arr = new Array(26).fill(0)
    for (const c of sentence) {
      arr[c.charCodeAt() - 'a'.charCodeAt()]++
    }
    return arr.every(v => v)
  };