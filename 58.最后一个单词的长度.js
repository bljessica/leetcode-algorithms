/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s === null || s.length === 0) {
        return 0
    }
    let arr = s.split(' ').filter((item) => item !== '');
    if (arr.length > 0) {
        return arr[arr.length - 1].length
    } else {
        return 0
    }
};