/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const res = []
    for (const [l, r] of queries) {
      let cur = arr[l]
      for (let i = l + 1; i <= r; i++) {
        cur ^= arr[i]
      }
      res.push(cur)
    }
    return res
  };