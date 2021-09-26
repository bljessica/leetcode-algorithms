/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
  const len = nums.length
  let i = 0, j = len - 1
  while (i < len) {
    while (i < len && nums[i] % 2 === 1) {
      i++
    }
    while (j > i && nums[j] % 2 === 0) {
      j--
    }
    if (i < len && j > i) {
      const tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
    }
    i++
  }
  return nums
};