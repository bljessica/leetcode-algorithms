/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  const len = nums.length
  let i = j = 0
  while (i < len) {
    if (nums[i] === 0) {
      j = i + 1
      while (j < len && nums[j] === 0) {
        j++
      }
      if (j < len) {
        const tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
      }
    }
    i++
  }
};