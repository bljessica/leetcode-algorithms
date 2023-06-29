/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length
    let i = len - 1
    // 找到需要与后面交换的数
    while (i > 0 && nums[i] <= nums[i - 1]) i-- 
    i--
    if (i >= 0) { // 如果 i < 0，说明nums递减
      // 找到后面从右往左（保证最小）第一个比这个数大的数
      let j = len - 1
      while (j > i && nums[j] <= nums[i]) j--
      // 交换
      const tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
    }
    //调整i后面顺序为递增（左右交换）
    i++
    j = len - 1
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  };