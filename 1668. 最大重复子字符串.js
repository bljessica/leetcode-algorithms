/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let res = 0
    while (sequence.indexOf(word.repeat(res + 1)) !== -1) res++
    return res
  };