/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let up = down = 1
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
        up = Math.max(up, down + 1)
      } else if (nums[i] < nums[i - 1]) {
        down = Math.max(down, up + 1)
      }
    }
    return Math.max(up, down)
  };