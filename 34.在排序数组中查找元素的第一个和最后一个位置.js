/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  // 1.函数
  // if (nums.indexOf(target) === -1) {
  //   return [-1, -1]
  // }
  // return [nums.indexOf(target), nums.lastIndexOf(target)]
  // 2.二分查找
  let left = 0, right = nums.length - 1
  let res = []
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      res.push(mid)
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
};