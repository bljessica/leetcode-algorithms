/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let cost = 0, max = 0, start = 0
    const len = s.length, diff = []
    for (let i = 0; i < len; i++) {
      diff[i] = Math.abs(s[i].charCodeAt() - t[i].charCodeAt())
    }
    for (let i = 0; i < len; i++) {
      if (diff[i] + cost <= maxCost) {
        cost += diff[i]
        max = Math.max(max, i - start + 1)
      } else {
        cost -= diff[start]
        start++
        i--
      }
    }
    return max
  };