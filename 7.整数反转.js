/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0;
    while(x) {
        res = res * 10 + x % 10;
        x = (x / 10) | 0; //异或0可强制转为32位有符号整数并取整
    }
    return (res | 0) === res? res: 0;
};