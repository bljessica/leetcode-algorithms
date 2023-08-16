/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    const map1 = new Map()
    const map2 = new Map()
    for (const c of target) {
      if (!map1.get(c)) map1.set(c, 1)
      else map1.set(c, map1.get(c) + 1)
      map2.set(c, 0)
    }
    for (const c of s) {
      if (map2.get(c) !== undefined) {
        map2.set(c, map2.get(c) + 1)
      }
    }
    let res = Infinity
    map2.forEach((v, k) => {
      res = Math.min(res, Math.floor(v / map1.get(k)))
    })
    return isFinite(res) ? res : 0
  };