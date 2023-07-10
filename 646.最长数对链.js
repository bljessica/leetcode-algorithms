/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort(([a, b], [c, d]) => {
      if (b === d) return a - c
      return b - d
    })
    let pre = pairs[0][1], res = 1
    for (let i = 1; i < pairs.length; i++) {
      if (pairs[i][0] > pre) {
        res++
        pre = pairs[i][1]
      } 
    }
    return res
  };