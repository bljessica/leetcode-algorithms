/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  let res = []
  let len = nums.length
  function backtrack (start = 0) {
    if (start === len) {
      res.push(nums.slice())
    }
    for (let i = start; i < len; i++) {
      // 动态维护数组，将访问过的放左边
      let tmp = nums[i]
      nums[i] = nums[start]
      nums[start] = tmp
      // 递归
      backtrack(start + 1)
      // 撤销标记
      tmp = nums[i]
      nums[i] = nums[start]
      nums[start] = tmp
    }
  }
  backtrack()
  return res
};