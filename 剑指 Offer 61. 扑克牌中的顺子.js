/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function(nums) {
  const set = new Set()
  let max = 0, min = 14
  for (const num of nums) {
    if (!num) {
      continue
    }
    if (set.has(num)) {
      return false
    }
    set.add(num)
    max = Math.max(max, num)
    min = Math.min(min, num)
  }
  return max - min < 5
};