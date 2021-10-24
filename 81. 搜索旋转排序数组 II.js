/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
  const len = nums.length
  let left = 0, right = len - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return true
    } else if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++
      right--
    } else if (nums[left] <= nums[mid]) { // 前半部分有序
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else { // 后半部分有序
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return false
};