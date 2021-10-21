/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
  const max = Math.max(...nums)
  let idx = 0
  for (let i = 0; i < nums.length; i++) {
    if (max === nums[i]) {
      idx = i
    } else if (max < 2 * nums[i]) {
      return -1
    }
  }
  return idx
};