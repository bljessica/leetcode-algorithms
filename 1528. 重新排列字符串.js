/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
  const len = s.length
  const arr = new Array(len).fill('')
  for (let i = 0; i < len; i++) {
    arr[indices[i]] = s[i]
  }
  return arr.join('')
};