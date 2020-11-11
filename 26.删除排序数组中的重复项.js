/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length, newLen = 0;
    let i = 0, j = 0;
    while(j < len) {
        nums[i] = nums[j];
        while(j < len && nums[i] === nums[j]) j++;
        i++;
        newLen++;
    }
    return newLen;
};