/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map1 = new Map()
    for (const num of nums1) {
      if (!map1.has(num)) map1.set(num, 1)
      else map1.set(num, map1.get(num) + 1)
    }
    const res = new Set()
    for (const num of nums2) {
      if (map1.has(num)) res.add(num)
    }
    return Array.from(res)
  };