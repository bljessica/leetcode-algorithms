/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const res = [], len = s.length
    const dfs = (idx, str = '') => {
      if (idx === len) {
        res.push(str)
        return
      } 
      const c = s[idx]
      if (c >= '0' && c <= '9') {
        dfs(idx + 1, str + c)
      } else {
        dfs(idx + 1, str + c.toUpperCase())
        dfs(idx + 1, str + c.toLowerCase())
      }
    }
    dfs(0)
    return res
  };