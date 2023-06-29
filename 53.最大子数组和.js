/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity, cur = 0
    nums.forEach(num => {
      cur = Math.max(cur + num, num)
      max = Math.max(max, cur)
    })
    return max
  };