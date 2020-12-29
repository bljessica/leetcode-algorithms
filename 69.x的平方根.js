/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0
    }
    let res = 0
    while (res * res < x) {
        res++
    }
    if (res * res === x) {
        return res
    } else {
        return res - 1
    }
};