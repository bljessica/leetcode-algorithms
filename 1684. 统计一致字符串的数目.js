/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
  const arr = allowed.split('')
  let res = 0
  for (const word of words) {
    let flag = true
    for (const c of word) {
      if (!arr.includes(c)) {
        flag = false
        break
      }
    }
    if (flag) {
      res++
    }
  }
  return res
};