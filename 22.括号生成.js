/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    let generate = function(left, right, curStr) {
        if(left === right && left === n) {
            res.push(curStr);
            return;
        }
        if(left < n) generate(left + 1, right, curStr + '(');
        if(left > right) generate(left, right + 1, curStr + ')');
    }
    generate(0, 0, '');
    return res;
};