/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
  const res = []
  let start = nums[0]
  nums.push(nums[nums.length - 1] + 2)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      if (nums[i - 1] === start) {
        res.push(String(start))
      } else {
        res.push(start + '->' + nums[i - 1])
      }
      start = nums[i]
    }
  }
  return res
};