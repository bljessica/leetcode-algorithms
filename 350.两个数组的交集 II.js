/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map1 = new Map(), map2 = new Map()
    for (const num of nums1) {
      if (!map1.has(num)) map1.set(num, 1)
      else map1.set(num, map1.get(num) + 1)
    }
    for (const num of nums2) {
      if (!map2.has(num)) map2.set(num, 1)
      else map2.set(num, map2.get(num) + 1)
    }
    const res = []
    map1.forEach((v, k) => {
      if (map2.has(k)) {
        const min = Math.min(v, map2.get(k))
        for (let i = 0; i < min; i++) res.push(k)
      }
    })
    return res
  };