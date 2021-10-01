/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
  for (let c of s) {
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      return c
    }
  }
  return ' '
};