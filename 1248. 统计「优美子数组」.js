/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const oddIdxArr = [-1]
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] & 1) oddIdxArr.push(i)
    }
    oddIdxArr.push(nums.length)
    let res = 0
    for (let i = 1; i + k < oddIdxArr.length; i++) {
      res += (oddIdxArr[i] - oddIdxArr[i - 1]) * (oddIdxArr[i + k] - oddIdxArr[i + k - 1])
    }
    return res
  };