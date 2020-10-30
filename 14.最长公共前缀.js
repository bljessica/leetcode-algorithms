/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) {
        return '';
    }
    let res = '';
    for(let i = 0; i < strs[0].length; i++) {
        let tmp = strs[0][i];
        res += tmp;
        for(let str of strs) {
            if(i > str.length) {
                return res.substring(0, res.length - 1);
            }
            if(str[i] !== tmp) {
                return res.substring(0, res.length - 1);
            }
        }
    }
    return res;
};