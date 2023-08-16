/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    nums.sort((a, b) => a - b)
    let res = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        const cur = nums[i]
        for (let j = i; j < nums.length; j++) {
          nums[j] -= cur
        }
        res++
      }
    }
    return res
  };