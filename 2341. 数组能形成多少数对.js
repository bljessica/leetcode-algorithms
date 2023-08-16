/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    const map = new Map()
    for (const n of nums) {
      if (!map.get(n)) map.set(n, 1)
      else map.set(n, map.get(n) + 1)
    }
    let pairNum = 0, lastNum = 0
    map.forEach(v => {
      if (v & 1) lastNum++
      pairNum += Math.floor(v / 2)
    })
    return [pairNum, lastNum]
  };