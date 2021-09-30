/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  const n = nums.length
  const res = []
  for(const num of nums) {
    const idx = (num - 1) % n
    nums[idx] += n
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) {
      res.push(i + 1)
    }
  }
  return res
};