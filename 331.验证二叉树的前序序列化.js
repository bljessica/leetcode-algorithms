/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    const stack = [1]
    const arr = preorder.split(',')
    for (const val of arr) {
      if (stack.length === 0) return false
      stack.pop()
      if (val !== '#') {
        stack.push(1, 1)
      }
    }
    return stack.length === 0
  };