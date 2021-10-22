/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  const swap = (i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]
  const len = nums.length
  let p1 = 0, p2 = len - 1
  for (let i = 0; i < len; i++) {
    while (i < p2 && nums[i] === 2) {
      swap(i, p2--)
    }
    if (nums[i] === 0) {
      swap(p1++, i)
    }
  }
};