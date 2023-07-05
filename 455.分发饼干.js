/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let res = 0, idx = 0
    for (const c of g) {
      while (idx < s.length && s[idx] < c) idx++
      if (idx < s.length) res++
      else break
      idx++
    }
    return res
  };