/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  // const arr = nums.map(item => item * item)
  const res = []
  let i = 0, j = nums.length - 1
  while (i <= j) {
    const left = Math.abs(nums[i])
    const right = Math.abs(nums[j])
    if (left >= right) {
      res.unshift(left * left)
      i++
    } else {
      res.unshift(right * right)
      j--
    }
  }
  return res
};