/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  // 1.
  // if (s.length === 0) return 0
  // let max = 1
  // for (let i = 0; i < s.length; i++) {
  //   const arr = [s[i]]
  //   for (let j = i + 1; j < s.length; j++) {
  //     if (arr.includes(s[j])) {
  //       break
  //     } else {
  //       max = Math.max(max, j - i + 1)
  //       arr.push(s[j])
  //     }
  //   }
  // }
  // return max
  // 2.滑动窗口
  const set = new Set()
  const len = s.length
  let max = 0, right = -1
  for (let i = 0; i < len; i++) {
    if (i !== 0) { // 左指针右移
      set.delete(s[i - 1])
    }
    while (right + 1 < len && !set.has(s[right + 1])) {
      set.add(s[right + 1])
      right++
    }
    max = Math.max(max, right - i + 1)
  }
  return max
};