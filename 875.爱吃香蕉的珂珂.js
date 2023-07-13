/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1, r = Math.max(...piles)
    let res = r
    while (l < r) {
      const mid = (l + r) >>> 1
      if (getTime(mid, piles) <= h) {
        r = mid
        res = mid
      }
      else {
        l = mid + 1
      }
    }
    return res
  };
  
  const getTime = (k, piles) => {
    let res = 0
    for (const p of piles) {
      if (k >= p) res++
      else res += Math.ceil(p / k)
    }
    return res
  }