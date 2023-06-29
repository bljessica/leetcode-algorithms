/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const len = nums.length
    let l = 0, r = len - 1
    while (l <= r) {
      const mid = Math.floor((l + r) / 2)
      if (nums[mid] === target) return mid
      if (nums[mid] < nums[l]) { //右半部分有序
        if (nums[mid] < target && target <= nums[r]) l = mid + 1
        else r-- //中间数左移
      } else { // 左半部分有序
        if (nums[l] <= target && target < nums[mid]) r = mid - 1
        else l++ //中间数右移
      }
    }
    return -1
  };