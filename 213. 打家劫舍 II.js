/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  const len = nums.length
  if (len === 1) {
    return nums[0]
  } else if (len === 2) {
    return Math.max(...nums)
  }
  return Math.max(robInRange(nums, 0, len - 2), robInRange(nums, 1, len - 1))
};

const robInRange = (nums, start, end) => {
  let tmp1 = nums[start], tmp2 = Math.max(tmp1, nums[start + 1])
  for (let i = start + 2; i <= end; i++) {
    const tmp = tmp2
    tmp2 = Math.max(tmp1 + nums[i], tmp2)
    tmp1 = tmp
  }
  return tmp2
}