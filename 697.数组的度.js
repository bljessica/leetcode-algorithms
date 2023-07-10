/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const map = new Map()
    for (const num of nums) {
      if (!map.has(num)) map.set(num, 1)
      else map.set(num, map.get(num) + 1)
    }
    let maxCnt = 0, maxNums = []
    map.forEach((v, k) => {
      if (v > maxCnt) {
        maxCnt = v
        maxNums = [k]
      } else if (v === maxCnt) maxNums.push(k)
    })
    let minLen = Number.MAX_SAFE_INTEGER
    maxNums.forEach(n => {
      minLen = Math.min(minLen, nums.lastIndexOf(n) - nums.indexOf(n) + 1)
    })
    return minLen
  };