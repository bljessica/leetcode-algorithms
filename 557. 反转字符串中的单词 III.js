/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  const arr = s.split(' ')
  const wordsItemArr = arr.map(str => str.split('').reverse().join(''))
  return wordsItemArr.join(' ')
};