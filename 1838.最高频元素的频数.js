/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b)
    const len = nums.length
    let l = 0, res = 1, sum = 0
    for (let r = 1; r < len ; r++) {
        // 变成右边的值所需要的操作次数
        sum += (nums[r] - nums[r - 1]) * (r - l)
        while (sum > k) {
            // 窗口右移
            sum = sum - nums[r] + nums[l]
            l++
        }
        res = Math.max(res, r - l + 1)
    }
    return res
};