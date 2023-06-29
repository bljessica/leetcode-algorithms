/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    const recur = (idx, arr) => {
      if (idx === nums.length) {
        res.push(arr)
        return
      }
      const newArr = arr.slice()
      newArr.push(nums[idx])
      let i = idx + 1
      while (i < nums.length && nums[i] === nums[i - 1]) i++
      recur(i, arr.slice())
      recur(idx + 1, newArr)
    }
    recur(0, [])
    return res
  };