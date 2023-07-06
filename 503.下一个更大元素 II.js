/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const res = [], len = nums.length
    const findNext = (cur, nums) => {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] > cur) return nums[i]
      }
      return null
    }
    for (let i = 0; i < len; i++) {
      const cur = nums[i]
      let next = findNext(cur, nums.slice(i + 1))
      if (next === null) next = findNext(cur, nums.slice(0, i))
      if (next === null) next = -1
      res.push(next)
    }
    return res
  };