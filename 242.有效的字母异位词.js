/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map()
    for (const c of s) {
      if (!map.get(c)) map.set(c, 1)
      else map.set(c, map.get(c) + 1)
    }
    for (const c of t) {
      if (!map.get(c)) return false
      else map.set(c, map.get(c) - 1)
    }
    let flag = true
    map.forEach((count) => {
      if (count !== 0) {
        flag = false
        return
      }
    })
    if (!flag) return false
    return true
  };