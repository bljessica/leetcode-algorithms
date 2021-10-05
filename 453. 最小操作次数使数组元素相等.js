/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves = function(nums) {
  const min = Math.min(...nums)
  let sum = 0
  for (let num of nums) {
    sum += num
  }
  return sum - min * nums.length
};