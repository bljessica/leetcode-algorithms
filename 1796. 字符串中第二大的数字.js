/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let res = max = -1
    for (const c of s) {
      if (!isNaN(c)) {
        const num = Number(c)
        if (max === -1) max = num
        else {
          if (num > max) {
            res = max
            max = num
          } else if (num < max) {
            if (res === -1) res = num
            else if (num > res) res = num
          }
        }
      }
    }
    return res
  };