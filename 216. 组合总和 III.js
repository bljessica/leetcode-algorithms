/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
  const res = []
  const dfs = (start, arr, sum) => {
    if (sum === n && arr.length === k) {
      res.push(arr.slice())
    } 
    if (sum >=n || arr.length > k) {
      return
    }
    for (let i = start; i < 10; i++) {
      arr.push(i)
      dfs(i + 1, arr, sum + i)
      arr.pop()
    }
  }
  dfs(1, [], 0)
  return res
};