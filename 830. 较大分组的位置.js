/**
 * @param {string} s
 * @return {number[][]}
 */
 var largeGroupPositions = function(s) {
  let start = 0, end = 0
  const res = []
  const len = s.length
  for (let i = 1; i < len; i++) {
    if (s[i] === s[start]) {
      end++
    } 
    if (s[i] !== s[start] || i === len - 1) {
      if (end - start >= 2) {
        res.push([start, end])
      }
      start = end = i
    }
  }
  return res
};