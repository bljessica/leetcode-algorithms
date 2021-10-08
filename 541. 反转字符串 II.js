/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
  let i = 0
  const len = s.length
  let res = ''
  let lastIdx = -1
  while (i < len) {
    if (i + 2 * k - 1 < len) {
      res += s.slice(i, i + k).split('').reverse().join('') + s.slice(i + k, i + 2 * k)
      lastIdx = i + 2 * k - 1
    }
    i += 2 * k
  }
  const last = len - 1 - lastIdx
  if (last < k) {
    res += s.slice(lastIdx + 1).split('').reverse().join('')
  } else if (last < 2 * k) {
    res += s.slice(lastIdx + 1, lastIdx + 1 + k).split('').reverse().join('') + s.slice(lastIdx + 1 + k)
  }
  return res
};