/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  const res = []
  const dfs = (cur, list) => {
    if (list.length + n - cur + 1 < k) {
      return
    }
    if (list.length === k) {
      res.push(list)
      return
    }
    dfs(cur + 1, [cur, ...list])
    dfs(cur + 1, list)
  }
  dfs(1, [])
  return res
};