/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let res = 1
    for (const num of nums) {
      if (!num) return 0
      if (num < 0) res *= -1
    }
    return res
  };