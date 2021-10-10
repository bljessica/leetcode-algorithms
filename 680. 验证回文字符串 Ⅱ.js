/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s, flag = true) {
  let left = 0, right = s.length - 1
  while (left < right && s[left] === s[right]) {
    left++
    right--
  }
  if (right <= left) {
    return true
  }
  if (flag) {
    return validPalindrome(s.slice(left, right), false) || validPalindrome(s.slice(left + 1, right + 1), false)
  }
  return false
};