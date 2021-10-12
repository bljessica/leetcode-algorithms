/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
  let res = 0
  // 1.暴力
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] === nums[j]) {
  //       res++
  //     }
  //   }
  // }
  // 2.哈希表计数
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    const key = String(nums[i])
    map[key] = map[key] === undefined ? 0 : map[key] + 1
    res += map[key]
  }
  return res
};