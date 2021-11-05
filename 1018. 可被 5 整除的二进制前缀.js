/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
 var prefixesDivBy5 = function(nums) {
  const res = []
  let cur = 0
  for (const num of nums) {
    cur = (cur * 2 + num) % 5
    if (cur % 5 === 0) {
      res.push(true)
    } else {
      res.push(false)
    }
  }
  return res
};