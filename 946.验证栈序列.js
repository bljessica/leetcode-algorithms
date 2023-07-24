/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const len = pushed.length
    let i = j = 0
    const stack = []
    while (i < len || j < len) {
      const cur = popped[j]
      if (stack.includes(cur)) { // 栈内包含
        if (stack[stack.length - 1] !== cur) return false
        stack.pop()
        j++
      } else { // 栈内不包含
        while (pushed[i] !== popped[j]) {
          stack.push(pushed[i++])
        }
        stack.push(pushed[i++])
      }
    }
    return true
  };