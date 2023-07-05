/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [] // 单调栈
    for (const c of num) {
      while (stack.length && stack[stack.length - 1] > c && k) {
        stack.pop()
        k--
      }
      stack.push(c)
    }
    for (; k > 0; k--) stack.pop()
    let res = '', isStart = true
    for (const c of stack) {
      if (c === '0' && isStart) {
        continue
      }
      isStart = false
      res += c
    }
    return res === '' ? '0' : res
  };