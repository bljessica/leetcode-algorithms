/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let res = 0
    for (let i = 1; i <= num; i++) {
      if (getDigitsSum(i) % 2 === 0) res++
    }
    return res
  };
  
  const getDigitsSum = n => {
    let res = 0
    while (n) {
      res += n % 10
      n = Math.floor(n / 10)
    }
    return res
  }