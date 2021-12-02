/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
  const map = {}
  for (const c of s) {
    map[c] = map[c] === undefined ? 1 : map[c] + 1
  }
  return Object.keys(map).sort((a, b) => map[b] - map[a]).map(c => c.repeat(map[c])).join('')
};