/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    const sum = _.sum(nums), n = nums.length
    let f = 0
    for (let i = 0; i < n; i++) {
      f += i * nums[i]
    }
    let max = f
    for (let i = n - 1; i > 0; i--) {
      f += sum - n * nums[i]
      max = Math.max(max, f)
    }
    return max
  };