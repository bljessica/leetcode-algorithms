/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = new Map()
    for (const num of nums) {
      if (!map.get(num)) map.set(num, 1)
      else map.set(num, map.get(num) + 1)
    }
    const res = [], countThresh = Math.floor(nums.length / 3)
    map.forEach((count, num) => {
      if (count > countThresh) res.push(num)
    })
    return res
  };