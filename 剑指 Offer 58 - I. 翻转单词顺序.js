/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  const arr = s.split(' ').filter(word => word.length)
  return arr.reverse().join(' ').trim()
};