/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
  function calcDigitNum(num) {
    let res = 0
    while (num !== 0) {
      num = Math.floor(num / 10)
      res++
    }
    return res
  }
  let res = 0
  nums.forEach(num => {
    res += calcDigitNum(num) % 2 === 0 ? 1 : 0
  })
  return res
};