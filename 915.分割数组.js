/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    const rightMin = []
    const len = nums.length
    let min = nums[len - 1]
    for (let i = len - 1; i >= 0; i--) {
      if (nums[i] < min) {
        min = nums[i]
      }
      rightMin.push(min)
    }
    rightMin.reverse()
    let leftMax = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < len; i++) {
      leftMax = Math.max(leftMax, nums[i])
      if (leftMax <= rightMin[i + 1]) return i + 1
    }
  };