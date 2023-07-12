/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const maxVal = Math.max(...nums)
    const sum = new Array(maxVal + 1).fill(0)
    for (const v of nums) sum[v] += v
    let first = sum[0], second = Math.max(sum[0], sum[1])
    for (let i = 2; i < sum.length; i++) {
      const tmp = second
      second = Math.max(first + sum[i], second)
      first = tmp
    }
    return second
  };