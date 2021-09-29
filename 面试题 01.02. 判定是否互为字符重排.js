/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
  const map = {}
  for (let i = 0; i < s1.length; i++) {
    const cur = map[s1[i]]
    if (!cur) {
      map[s1[i]] = 1
    } else {
      map[s1[i]] += 1
    }
  }
  for (let i = 0; i < s2.length; i++) {
    const cur = map[s2[i]]
    if (!cur) {
      return false
    }
    map[s2[i]] -= 1
  }
  return Object.values(map).every(val => val === 0)
};