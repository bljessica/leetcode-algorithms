/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let isInPair = false
    let res = 0
    for (const c of s) {
      if (c === '|') isInPair = !isInPair
      else if (!isInPair && c === '*') res++
    }
    return res
  };