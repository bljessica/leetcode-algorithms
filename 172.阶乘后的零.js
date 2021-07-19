/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    // 检查因子2 5的对数
    // 因为2的倍数比五多，所以只检查因子中5的个数即可
    let res = 0
    while (n / 5 !== 0) {
        res += Math.floor(n / 5)
        n = Math.floor(n / 5)
    }
    return res
};