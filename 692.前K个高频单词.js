/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = new Map()
    for (const word of words) {
      if (map.has(word)) map.set(word, map.get(word) + 1)
      else map.set(word, 1)
    }
    words.sort((a, b) => {
      if (map.get(a) === map.get(b)) return a.localeCompare(b)
      return map.get(b) - map.get(a)
    })
    return Array.from(new Set(words)).slice(0, k)
  };