/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  const map = new Map()
  for (const str of strs) {
    const key = Array.from(str).sort().join('')
    const arr = map.get(key) || []
    arr.push(str)
    map.set(key, arr)
  }
  const res = []
  map.forEach(val => res.push(val))
  return res
};