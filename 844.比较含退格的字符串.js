/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return getFinalStr(s) === getFinalStr(t)
  };
  
  
  const getFinalStr = (str, ) => {
    const stack = []
    for (const c of str) {
      if (c === '#') {
        if (stack.length) stack.pop()
      } else {
        stack.push(c)
      }
    }
    return stack.join('')
  }