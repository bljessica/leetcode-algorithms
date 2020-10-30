/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let len = s.length;
    let res = 0;
    for(let i = 0; i < len; i++) {
        let tmp = obj[s[i]];
        if(i < s.length - 1 && tmp < obj[s[i + 1]]) {
            res -= tmp;
        }
        else {
            res += tmp;
        }
    }
    return res;
};