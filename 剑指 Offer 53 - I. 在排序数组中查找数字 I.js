/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  const firstIdx = nums.indexOf(target)
  if (firstIdx === -1) {
    return 0
  }
  return nums.lastIndexOf(target) - firstIdx + 1
};