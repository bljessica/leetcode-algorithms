/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  const map = new Map()
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1)
  }
  let res = 0
  for (let item of map) {
    res += item[1] - (item[1] % 2)
  }
  // 如果有奇数个数的字母，结果加一
  (res < s.length) && res++
  return res
};