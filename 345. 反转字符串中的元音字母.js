/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
  const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const len = s.length
  let i = 0, j = len - 1
  const res = s.split('')
  while (i < j) {
    while ((i <= len - 1) && !arr.includes(s[i])) i++
    while (j >= 0 && !arr.includes(s[j])) j--
    if (i < j) {
      const tmp = res[i]
      res[i++] = res[j]
      res[j--] = tmp
    }
  }
  return res.join('')
};