/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0
    a = a.split('')
    b = b.split('')
    // 让 a 为较长的数组
    if (a.length < b.length) {
        let tmp = a
        a = b
        b = tmp
    }
    let i = b.length - 1
    let dis = a.length - b.length
    while (i >= 0) {
        a[dis + i] = parseInt(a[dis + i]) + parseInt(b[i]) + carry
        // 进位
        if (a[dis + i] >= 2) {
            a[dis + i] -= 2
            carry = 1
        } else {
            carry = 0
        }
        i--
    }
    // a 剩余位数
    if (carry) {
        i = dis - 1
        while (i >= 0 && carry) {
            a[i] = parseInt(a[i]) + 1
            if (a[i] >= 2) {
                a[i] -= 2
                carry = 1
            } else {
                carry = 0
            }
            i--
        }
        if (carry) {
            a.unshift(1)
        }
    }
    return a.join('')
};