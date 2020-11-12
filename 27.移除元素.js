/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length, newLen = 0;
    let i = 0, j = 0;
    while(j < len) {
        while(nums[j] === val) j++;
        if(j >= len) break;
        nums[i++] = nums[j++];
        newLen++;
    }
    return newLen;
};