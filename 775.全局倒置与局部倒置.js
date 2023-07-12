/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
    const len = nums.length
    let lastMin = nums[len - 1]
    for (let i = len - 3; i >= 0; i--) {
      if (nums[i] > lastMin) return false
      lastMin = Math.min(lastMin, nums[i + 1])
    }
    return true
    // let globalInverseNum = localInverseNum = 0
    // const len = nums.length
    // for (let i = 0; i < len; i++) {
    //   for (let j = i + 1; j < len; j++) {
    //     if (nums[i] > nums[j]) {
    //       if (j === i + 1) localInverseNum++
    //       globalInverseNum++
    //     }
    //   }
    // }
    // return globalInverseNum === localInverseNum
  };