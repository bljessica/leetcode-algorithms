/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  const len = nums.length
  if (len < 2) {
    return nums
  }
  let i = 2, j = 2
  while (j < len) {
    if (nums[i - 2] !== nums[j]) {
      nums[i++] = nums[j]
    }
    j++
  }
  return i
};