/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    let res = 0
    const origin = a
    a = ''
    const maxLen = 2 * origin.length + b.length
    while (a.length < maxLen && a.indexOf(b) === -1) {
      a += origin
      res++
    }
    return a.indexOf(b) !== -1 ? res : -1
  };