/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i of s) {
        if(i === '(' || i === '{' || i === '[') {
            stack.push(i);
        }
        else if (i === ')' || i === '}' || i === ']') {
            if(stack.length === 0) return false;
            let tmp = stack.pop();
            if(i === ')') {
                if(tmp !== '(') return false;
            }
            else if(i === '}') {
                if(tmp !== '{') return false;
            }
            else {
                if(tmp !== '[') return false;
            }
        }
    }
    return stack.length === 0;
};