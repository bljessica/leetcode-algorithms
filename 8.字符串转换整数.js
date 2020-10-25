/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let num = parseInt(s, 10);
    if(isNaN(num)) {
        return 0;
    }
    if(num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) {
        return num < Math.pow(-2, 31)? Math.pow(-2, 31): Math.pow(2, 31) - 1;
    }
    return num;
};