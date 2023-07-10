/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let pre = s[0], num = 1
    const cnt = []
    s += ' '
    for (let i = 1; i < s.length; i++) {
      if (s[i] === pre) num++
      else {
        cnt.push(num)
        pre = s[i]
        num = 1
      }
    }
    let res = 0
    for (let i = 1; i < cnt.length; i++) {
      res += Math.min(cnt[i - 1], cnt[i])
    }
    return res
  };