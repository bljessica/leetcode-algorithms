/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let res = 0
    for (let i = 1; i <= n; i++) {
      if (isGoodNum(i)) res++
    }
    return res
  };
  
  const map = {
    0: 0, 
    1: 1, 
    8: 8,
    2: 5,
    5: 2,
    6: 9,
    9: 6
  }
  
  const isGoodNum = (n) => {
    let hasChanged = false
    while (n) {
      const cur = n % 10
      if (map[cur] === undefined) return false
      if (map[cur] !== cur) hasChanged = true
      n = Math.floor(n / 10)
    }
    return hasChanged
  }