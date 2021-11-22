/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  const map = {}
  for (const num of nums) {
    map[num] = map[num] === undefined ? 1 : map[num] + 1
  }
  const arr = Object.entries(map)
  arr.sort((a, b) => b[1] - a[1])
  return arr.slice(0, k).map(data => data[0])
};