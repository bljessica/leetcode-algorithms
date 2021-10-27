/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  const arr = s.split(' ').filter(s => s.length)
  return arr.reverse().join(' ')
};