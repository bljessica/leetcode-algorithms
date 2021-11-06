/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
  if (n === 0) {
    return 0
  }
  const nums = new Array(n + 1)
  nums[0] = 0, nums[1] = 1
  let max = 1
  for (let i = 2; i <= n; i++) {
    const mid = Math.floor(i / 2)
    if (i & 1) {
      nums[i] = nums[mid] + nums[mid + 1]
    } else {
      nums[i] = nums[mid]
    }
    max = Math.max(max, nums[i])
  }
  return max
};