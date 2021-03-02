/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []
  let res = 0
  tokens.forEach(item => {
    if (!isNaN(item)) {
      stack.push(parseInt(item))
    } else {
      let num1 = stack.pop()
      let num2 = stack.pop()
      if (item === '+') {
        stack.push(num1 + num2)
      } else if (item === '-') {
        stack.push(num2 - num1)
      } else if (item === '*') {
        stack.push(num2 * num1)
      } else if (item === '/') {
        stack.push(parseInt(num2 / num1))
      }
    }
  })
  return stack.pop()
};