/**
 * @param {string} S
 * @return {string}
 */
 var compressString = function(S) {
  let str = ''
  let i = 0, len = S.length
  while (i < len) {
    let j = i + 1
    while (j < len && S[j] === S[i]) {
      j++
    }
    str += S[i] + (j - i)
    i = j
  }
  return str.length < S.length ? str : S
};