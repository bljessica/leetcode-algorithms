/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    const map = new Map()
    let res = 0
    for (let i = left; i <= right; i++) {
      const oneNum = calcOneNum(i)
      if (map.has(oneNum)) {
      } else {
        map.set(oneNum, isPrime(oneNum))
      }
      if (map.get(oneNum)) res++
    }
    return res
  };  
  
  const isPrime = (n) => {
    if (n === 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false
    }
    return true
  }
  
  const calcOneNum = (n) => {
    let res = 0
    while (n) {
      if (n & 1) res++
      n >>= 1
    }
    return res
  }