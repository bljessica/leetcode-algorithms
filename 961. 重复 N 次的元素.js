/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
  const map = {}
  for (const num of nums) {
    map[num] = map[num] === undefined ? 1 : map[num] + 1
  }
  return Object.entries(map).find(data => data[1] === nums.length / 2)[0]
};