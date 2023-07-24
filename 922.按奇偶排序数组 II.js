/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let i = 0, j = 1
    const len = nums.length
    while (i < len && j < len) {
      while (nums[i] % 2 === 0) i += 2
      while (nums[j] % 2 === 1) j += 2
      if (i < len && j < len) {
        const tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
      }
      i += 2
      j += 2
    }
    return nums
  };