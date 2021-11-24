/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
  const numStack = [], strStack = []
  let str = '', num = 0
  for (const c of s) {
    if (!isNaN(c)) {
      num = num * 10 + Number(c)
    } else if (c === '[') {
      numStack.push(num)
      num = 0
      strStack.push(str)
      str = ''
    } else if (c === ']') {
      str = strStack.pop() + str.repeat(numStack.pop())
    } else {
      str += c
    }
  }
  return str
};