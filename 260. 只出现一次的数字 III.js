/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
  const map = {}
  for (const num of nums) {
    map[num] = map[num] === undefined ? 1 : map[num] + 1
  }
  const res = []
  Object.entries(map).forEach(data => {
    if (data[1] === 1) {
      res.push(data[0])
    }
  })
  return res
};