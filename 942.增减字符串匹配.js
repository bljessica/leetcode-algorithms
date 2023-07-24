/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const res = [], n = s.length
    let l = 0, r = n
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        res.push(l++)
      } else {
        res.push(r--)
      }
    }
    res.push(l)
    return res
  };