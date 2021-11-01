/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function(s) {
  const leftStack = [], starStack = []
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(') {
      leftStack.push(i)
    } else if (c === ')') {
      if (!leftStack.length) {
        if (starStack.length) {
          starStack.pop()
        } else {
          return false
        }
      } else {
        leftStack.pop()
      }
    } else {
      starStack.push(i)
    }
  }
  while (leftStack.length && starStack.length) {
    const left = leftStack.pop()
    const star = starStack.pop()
    if (left > star) {
      return false
    }
  }
  return !leftStack.length
};