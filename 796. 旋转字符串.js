/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
  const idxs = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === goal[0]) {
      idxs.push(i)
    }
  }
  for (const idx of idxs) {
    if (s.substring(idx) + s.substring(0, idx) === goal) {
      return true
    }
  }
  return false
};