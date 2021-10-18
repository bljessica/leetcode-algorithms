/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
  const len = nums.length
  const res = []
  for (let i = 0; i < len; i++) {
    const idx = index[i]
    if (res[idx] !== undefined) {
      res.splice(idx, 0, nums[i])
    } else {
      res.push(nums[i])
    }
  }
  return res
};