/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
  let max = 0, curNum = 0
  for (let num of nums) {
    if (num) {
      curNum += 1
      max = Math.max(max, curNum)
    } else {
      curNum = 0
    }
  }
  return max
}; 