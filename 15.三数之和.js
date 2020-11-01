/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    let len = nums.length;
    //数组排序
    nums.sort((a, b) => a - b);
    for(let i = 0; i < len; i++) {
        if(nums[i] > 0) {
            break;
        }
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue; //去重
        }
        let left = i + 1, right = len - 1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                //去重
                while(left < len && nums[left + 1] === nums[left]) {
                    left++;
                }
                while(right < len && nums[right - 1] === nums[right]) {
                    right--;
                }
                left++;
                right--;
            }
            else if(sum < 0) {
                left++;
            }
            else if(sum > 0) {
                right--;
            }
        }
    }
    return res;
};