/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const map = {}
    for (const num of nums) {
      if (map[num]) map[num]++
      else map[num] = 1
    }
    nums.sort((a, b) => {
      const m = map[a], n = map[b]
      if (m === n) return b - a
      return m - n
    })
    return nums
  };