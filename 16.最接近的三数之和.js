/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let len = nums.length;
    let res = nums[0] + nums[1] + nums[2];
    nums.sort((a, b) => a - b);
    for(let i = 0; i < len; i++) {
        let left = i + 1, right = len - 1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === target) {
                return sum;
            }
            else if(sum > target) {
                if(sum - target < Math.abs(res - target)) {
                    res = sum;
                }
                right--;
            }
            else {
                if(target - sum < Math.abs(res - target)) {
                    res = sum;
                }
                left++;
            }
        }
    }
    return res;
};