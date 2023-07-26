/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const stack = []
    let str = ''
    for (const c of s) {
      if (c === '(') {
        stack.push(str)
        str = ''
      } else if (c === ')') {
        str = stack.pop() + str.split('').reverse().join('')
      } else {
        str += c
      }
    }
    return str
  };