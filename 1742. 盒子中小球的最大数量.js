/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const map = new Map()
    for (let i = lowLimit; i <= highLimit; i++) {
      const digitsSum = getDigitsSum(i)
      if (map.has(digitsSum)) map.set(digitsSum, map.get(digitsSum) + 1)
      else map.set(digitsSum, 1)
    }
    let maxBallNum = 0
    map.forEach((v) => maxBallNum = Math.max(maxBallNum, v))
    return maxBallNum
  };
  
  
  const getDigitsSum = (num) => {
    let res = 0
    while (num) {
      res += num % 10
      num = Math.floor(num / 10)
    }
    return res
  }