/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const len = nums.length
    for (let i = 0; i < len - 1; i++) {
      let key = i
      for (let j = i + 1; j < len; j++) {
        if (nums[j] < nums[key]) key = j
      }
      if (key !== i) {
        const tmp = nums[i]
        nums[i] = nums[key]
        nums[key] = tmp
      }
    }
    return nums
  };