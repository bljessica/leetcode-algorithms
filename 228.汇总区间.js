/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = i = 0
    const len = nums.length
    const res = []
    while (i < len) {
      start = i
      while (i + 1 < len && nums[i + 1] - nums[i] === 1) i++
      i === start ? res.push('' + nums[start]) : res.push(`${nums[start]}->${nums[i]}`)
      i++
    }
    return res
  };