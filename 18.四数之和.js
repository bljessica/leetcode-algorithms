/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length < 4) return [];
    nums.sort((a, b) => a - b);
    let res = [];
    let len = nums.length;
    for(let i = 0; i < len - 3; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue; //去重
        if(nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        for(let j = i + 1; j < len - 2; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue; //去重
            //双指针
            let p = j + 1, q = len - 1;
            while(p < q) {
                if(nums[i] + nums[j] + nums[p] + nums[q] === target) {
                    res.push([nums[i], nums[j], nums[p], nums[q]]);
                    //去重
                    while(p < q && nums[p + 1] === nums[p]) p++;
                    while(p < q && nums[q - 1] === nums[q]) q--; 
                    p++;
                    q--;
                }
                else {
                    nums[i] + nums[j] + nums[p] + nums[q] > target? q--: p++;
                }
            }
        }
    }
    return res;
};