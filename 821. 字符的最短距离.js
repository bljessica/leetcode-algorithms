/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
  const res = []
  const len = s.length
  for (let i = 0; i < len; i++) {
    let dis = 1
    if (s[i] === c) {
      res.push(0)
      continue
    }
    while (dis < len) {
      if ((i + dis < len && s[i + dis] === c) || (i - dis >= 0 && s[i - dis] === c)) {
        res.push(dis)
        break
      } 
      dis++
    }
  }
  return res
};