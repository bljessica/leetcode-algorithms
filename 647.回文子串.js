/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0
    const len = s.length
    for (let i = 0; i < 2 * len - 1; i++) {
      let l = Math.floor(i / 2), r = i - l
      while (l >= 0 && r < len && s[l] === s[r]) {
        l--
        r++
        res++
      }
    }
    return res
  };