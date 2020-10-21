/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length + nums2.length;
    if(len === 1) {
        if(nums1.length === 0) {
            return nums2[0];
        }
        else {
            return nums1[0];
        }
    }
    let nums = [];
    let isOdd = ((len % 2) == 0)? false: true; //是否为奇数长度
    let mid = Math.floor(len / 2);
    let index = 0, i = 0, j = 0;
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            nums[index++] = nums1[i++];
        }
        else {
            nums[index++] = nums2[j++];
        }
    }
    if(i < nums1.length) {
        nums = nums.concat(nums1.slice(i));
    }
    if(j < nums2.length) {
        nums = nums.concat(nums2.slice(j));
    }
    if(isOdd) {
        return nums[mid];
    }
    else {
        return (nums[mid] + nums[mid - 1]) / 2;
    }
};