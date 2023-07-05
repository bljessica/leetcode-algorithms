/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const res = [], n = nums.length, set = new Set(), path = []
    const dfs = (start) => {
      if (path.length >= 2) {
        const pathStr = path.toString()
        if (!set.has(pathStr)) {
          res.push(path.slice())
          set.add(pathStr)
        }
      }
      for (let i = start; i < n; i++) {
        if (!path.length || nums[i] >= path[path.length - 1]) {
          path.push(nums[i])
          dfs(i + 1)
          path.pop()
        }
      }
    }
    dfs(0)
    return res
  };