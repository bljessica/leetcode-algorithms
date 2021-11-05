/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
  const res = [], end = target[target.length - 1]
  for (let i = 1; i <= n; i++) {
    if (i > end) {
      break
    }
    res.push('Push')
    if (!target.includes(i)) {
      res.push('Pop')
    }
  }
  return res
};