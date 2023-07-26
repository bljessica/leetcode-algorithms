/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const map = getMap(chars)
    const res = []
    for (const word of words) {
      const curMap = getMap(word)
      let canHandle = true
      curMap.forEach((v, k) => {
        if (!map.get(k) || v > map.get(k)) canHandle = false
      })
      canHandle && res.push(word)
    }
    return res.reduce((res, cur) => {
      return res + cur.length
    }, 0)
  };
  
  const getMap = (word) => {
    const map = new Map()
    for (const c of word) {
      if (map.get(c)) map.set(c, map.get(c) + 1)
      else map.set(c, 1)
    }
    return map
  }