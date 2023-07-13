/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    const len = nums1.length
    const idx1 = new Array(len).fill(0)
    const idx2 = new Array(len).fill(0)
    for (let i = 0; i < len; i++) {
      idx1[i] = i
      idx2[i] = i
    }
    idx1.sort((a, b) => nums1[a] - nums1[b])
    idx2.sort((a, b) => nums2[a] - nums2[b])
    let l = 0, r = len - 1
    const res = new Array(len)
    for (let i = 0; i < len; i++) {
      if (nums1[idx1[i]] > nums2[idx2[l]]) {
        res[idx2[l++]] = nums1[idx1[i]]
      } else {
        res[idx2[r--]] = nums1[idx1[i]]
      }
    }
    return res
  };