/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  for (const num of nums) {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      return num
    }
  }
};