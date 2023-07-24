/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  const res = []
  for (let i = num.length - 1; i >= 0; i--) {
    let cur = num[i] + k % 10
    k = Math.floor(k / 10) + Math.floor(cur / 10)
    res.push(cur % 10)
  }
  while (k) {
    res.push(k % 10)
    k = Math.floor(k / 10)
  }
  return res.reverse()
};