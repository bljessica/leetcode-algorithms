/**
 * @param {string} s
 * @return {number}
 */
 var scoreOfParentheses = function(s) {
  const stack = []
  const len = s.length
  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      stack.push('(')
    } else { // s[i] === ')'
      if (stack[stack.length - 1] === '(') {
        stack.pop()
        stack.push(1)
      } else { // stack[stack.length - 1] === ')'
        let a = stack.pop()
        let sum = 0
        while (a !== '(') {
          sum += Number(a)
          a = stack.pop()
        }
        stack.push(2 * sum)
      }
    }
  }
  return stack.reduce((res, cur) => {
    return res + cur
  }, 0)
};