/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
  const countArr = new Array(101).fill(0)
  for (let num of nums) {
    countArr[num] += 1
  }
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] += countArr[i - 1]
  }
  const res = []
  for (let num of nums) {
    res.push(num ? countArr[num - 1] : 0)
  }
  return res
};