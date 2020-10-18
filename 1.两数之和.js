/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //1.暴力法
    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = i + 1; j < nums.length; j++) {
    //         if(nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
    //2.哈希表
    let prevNums = [];
    for(let i in nums) {
        let num = nums[i];
        let reduce = target - num;
        let targetIndex = prevNums[reduce];
        //找得到
        if(targetIndex !== undefined) {
            return [targetIndex, i];
        }
        else {
            prevNums[num] = i;
        }
    }
};