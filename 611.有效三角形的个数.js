/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b)
    let res = 0
    const len = nums.length
    for (let i = 0; i < len - 2; i++) {
      let k = i + 1
      for (let j = i + 1; j < len - 1; j++) {
        const sum = nums[i] + nums[j]
        while (k + 1 < len && sum > nums[k + 1]) k++
        res += Math.max(k - j, 0)
      }
    }
    return res
  };