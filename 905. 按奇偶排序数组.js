/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
  const len = nums.length
  const res = new Array(len)
  let idx = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] % 2 === 0) {
      res[idx++] = nums[i]
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] % 2 === 1) {
      res[idx++] = nums[i]
    }
  }
  return res
};