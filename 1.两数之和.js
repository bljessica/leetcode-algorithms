/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  // 1.暴力
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }
  // 2.哈希表
  const map = {} // num-idx
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i]
    } else {
      map[nums[i]] = i
    }
  }
};