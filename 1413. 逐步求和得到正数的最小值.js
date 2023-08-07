/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = 1, startValue = 1
    for (const num of nums) {
      while (sum + num < 1) {
        sum++
        startValue++
      }
      sum += num
    }
    return startValue
  };