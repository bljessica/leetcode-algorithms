/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0 // 进位
    let i = digits.length - 1
    digits[i]++
    if (digits[i] > 9) {
        carry = 1
        digits[i--] -= 10
    }
    while (carry && i >= 0) {
        digits[i]++
        if (digits[i] > 9) {
            digits[i--] -= 10
        } else {
            carry = 0
        }
    }
    if (carry) {
        digits.unshift(1)
    }
    return digits
};