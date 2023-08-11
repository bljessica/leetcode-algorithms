/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true
    let count = 0, idx1 = null, idx2 = null
    const len = s1.length
    for (let i = 0; i < len; i++) {
      if (s1[i] !== s2[i]) {
        count++
        if (count === 1) idx1 = i
        else if (count === 2) idx2 = i
        else return false
      }
    }
    return count === 2 && s1[idx1] === s2[idx2] && s1[idx2] === s2[idx1]
  };