/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
    function isPrime (num) {
        if (num === 1) {
            return false
        }
        const sqrtNum = Math.sqrt(num)
        for (let i = 2; i <= sqrtNum; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
    let res = 0
    for (let i = 1; i < n; i++) {
        if (isPrime(i)) {
            res++
        }
    }
    return res
};