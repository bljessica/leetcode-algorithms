/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const map = new Map()
    const res = []
    for (let i = 0; i + 10 <= s.length; i++) {
      const str = s.slice(i, i + 10)
      if (map.get(str)) map.set(str, map.get(str) + 1)
      else map.set(str, 1)
      if (map.get(str) === 2) {
        res.push(str)
      }
    }
    return res
  };