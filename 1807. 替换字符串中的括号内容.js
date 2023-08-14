/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    const map = new Map()
    for (const [k, v] of knowledge) {
      map.set(k, v)
    }
    let res = ''
    let lIdx = rIdx = preIdx = 0
    const set = new Set()
    while (lIdx < s.length) {
      preIdx = lIdx
      lIdx = s.indexOf('(', rIdx)
      if (set.has(lIdx) || lIdx < 0) break
      rIdx = s.indexOf(')', lIdx)
      const word = s.substring(lIdx + 1, rIdx)
      res += s.substring(preIdx, lIdx) + (map.get(word) ? map.get(word) : '?')
      set.add(lIdx)
      lIdx = rIdx + 1
    }
    if (lIdx < 0 && preIdx < s.length) {
      res += s.substring(preIdx)
    }
    return res
  };