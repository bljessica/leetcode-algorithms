/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) {
        return [];
    }
    let res = [];
    let map = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'};

    let dfs = function(curStr, i) { //i为digits的指针
        if(i === digits.length) {
            res.push(curStr);
            return;
        }
        let mapCurStr = map[digits[i]];
        for(let c of mapCurStr) {
            dfs(curStr + c, i + 1);
        }
    }

    dfs('', 0);
    return res;
};