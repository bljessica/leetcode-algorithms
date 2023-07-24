/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let res = left = 0
    for (const c of s) {
      switch (c) {
        case '(': left++; break
        case ')': {
          if (!left) res++
          else left--
        }
      }
    }
    res += left
    return res
  };