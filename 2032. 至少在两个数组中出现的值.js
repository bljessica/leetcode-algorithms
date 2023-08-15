/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const map = new Map()
    setNumMap(nums1, map)
    setNumMap(nums2, map)
    setNumMap(nums3, map)
    const res = []
    map.forEach((v, k) => {
      if (v >= 2) res.push(k)
    })
    return res
  };
  
  const setNumMap = (nums, map) => {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; ) {
      const n = nums[i]
      if (map.get(n)) map.set(n, map.get(n) + 1)
      else map.set(n, 1)
      while (i + 1 < nums.length && nums[i + 1] === nums[i]) i++
      i++
    }
  }