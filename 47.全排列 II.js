/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  const res = []
  const len = nums.length
  nums.sort((a, b) => (a - b))
  function backtrack(start = 0) {
    if (start === len) {
      res.push(nums.slice())
      return
    }
    const map = new Map()
    for (let i = start; i < len; i++) {
      if (!map.get(nums[i])) { // 剪枝
        map.set(nums[i], true) 
        // 将访问过的元素放左边
        let tmp = nums[start]
        nums[start] = nums[i]
        nums[i] = tmp
        backtrack(start + 1)
        // 还原
        tmp = nums[start]
        nums[start] = nums[i]
        nums[i] = tmp
      }
    }
  }
  backtrack()
  return res
};