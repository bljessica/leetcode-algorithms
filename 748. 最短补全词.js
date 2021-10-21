/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
 var shortestCompletingWord = function(licensePlate, words) {
  const arr = []
  for (const c of licensePlate.toLowerCase()) {
    if (c >= 'a' && c <= 'z') {
      arr.push(c)
    }
  }
  const ans = []
  for (const word of words) {
    const map = {}
    for (const c of word) {
      map[c] = map[c] === undefined ? 1 : map[c] + 1
    }
    let flag = true
    for (const c of arr) {
      if (map[c] === undefined || map[c] === 0) {
        flag = false
        break
      }
      map[c]--
    }
    if (flag) {
      ans.push(word)
    }
  }
  ans.sort((a, b) => a.length - b.length)
  return ans[0]
};