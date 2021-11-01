/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var maxDistance = function(nums1, nums2) {
  let max = 0
  const len1 = nums1.length
  for (let i = 0; i < len1; i++) {
    let j = i
    const val = nums1[i]
    while (nums2[j] >= val) {
      j++
    }
    max = Math.max(max, j - 1 - i)
  }
  return max
};