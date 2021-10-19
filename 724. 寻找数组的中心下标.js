/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  const sum = nums.reduce((res, cur) => (res + cur), 0)
  let i = 0, leftSum = 0
  while (i < nums.length) {
    leftSum = leftSum + (i >= 1 ? nums[i - 1] : 0) 
    if (leftSum === sum - leftSum - nums[i]) {
      return i
    }
    i++
  }
  return -1
};