/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = []
    for (const op of operations) {
      switch (op) {
        case 'D': stack.push(stack[stack.length - 1] * 2); break
        case 'C': stack.pop(); break
        case '+': stack.push(stack[stack.length - 1] + stack[stack.length - 2]); break
        default: stack.push(parseInt(op))
      }
    }
    return stack.reduce((res, cur) => res + cur, 0)
  };