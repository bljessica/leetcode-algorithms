/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestRangeI = function(nums, k) {
  const min = Math.min(...nums), max = Math.max(...nums)
  return (max - min > k * 2) ? (max - min - 2 * k) : 0
};