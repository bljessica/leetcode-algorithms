/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map = new Map()
    for (const c of s) {
      if (map.has(c)) map.set(c, map.get(c) + 1)
      else map.set(c, 1)
    }
    for (const c of t) {
      if (map.get(c)) map.set(c, map.get(c) - 1)
      else return c
    }
  };