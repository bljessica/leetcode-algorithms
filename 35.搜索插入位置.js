/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let res = -1;
    for(let i in nums) {
        if(nums[i] === target) return i;
        else if(nums[i] > target) return i;
    }
    return nums.length;
};