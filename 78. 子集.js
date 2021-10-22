/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  const res = []
  const len = nums.length
  const dfs = (cur, list) => {
    if (cur === len) { // 指针越界
      res.push(list.slice())
      return
    }
    list.push(nums[cur])
    dfs(cur + 1, list)
    list.pop()
    dfs(cur + 1, list)
  }
  dfs(0, [])                                             
  return res
};