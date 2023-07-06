/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const sortedNums = nums.slice().sort((a, b) => a - b)
    const len = nums.length
    let i = 0, j = len - 1
    while (i < len && nums[i] === sortedNums[i]) i++
    if (i === len) return 0
    while (j >= 0 && nums[j] === sortedNums[j]) j--
    return j - i + 1
  };