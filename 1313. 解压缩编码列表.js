/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
  const res = []
  for (let i = 0; i < nums.length; i += 2) {
    const count = nums[i]
    for (let j = 0; j < count; j++) {
      res.push(nums[i + 1])
    }
  }
  return res
};