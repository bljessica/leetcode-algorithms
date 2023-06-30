/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = nums[0], count = 0
    for (const num of nums) {
      if (num === res) count++
      else {
        if (count === 0) {
          res = num
          count = 1
        } else 
          count--
      }
    }
    return res
    // const map = new Map()
    // for (const num of nums) {
    //   if (!map.get(num)) map.set(num, 1)
    //   else map.set(num, map.get(num) + 1)
    // }
    // const count = Math.floor(nums.length / 2)
    // let res
    // map.forEach((v, k) => {
    //   if (v > count) res = k
    // })
    // return res
  };