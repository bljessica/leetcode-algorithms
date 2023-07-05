/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    const len = nums.length
    for (let i = 0; i < len; i++) {
      let j = i, k = i, cnt = 0
      while (nums[j] * nums[k] > 0) { // 方向相同
        j = k
        k = ((k + nums[k]) % len + len) % len // 保证返回值在[0, n]中
        if (j === k) break
        if (++cnt > len) return true
      }
    }
    return false
  };