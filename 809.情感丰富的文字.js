/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
    let res = 0
    words.forEach(word => {
      if (isExpandable(s, word)) res++
    })
    return res
  };
  
  
  const isExpandable = (s, t) => {
    let i = j = 0
    while (i < s.length && j < t.length) {
      if (s[i] !== t[j]) return false
      let cnt1 = cnt2 = 0
      const cur = s[i]
      while (i < s.length && s[i] === cur) {
        i++
        cnt1++
      }
      while (j < t.length && t[j] === cur) {
        j++
        cnt2++
      }
      if (cnt1 < cnt2) return false
      if (cnt1 > cnt2 && cnt1 < 3) return false
    }
    return i === s.length && j === t.length
  }