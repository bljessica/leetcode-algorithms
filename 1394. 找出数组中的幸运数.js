/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
  const map = {}
  for (const num of arr) {
    map[num] = map[num] === undefined ? 1 : map[num] + 1
  }
  let max = -1
  Object.entries(map).forEach(data => {
    if (data[0] == data[1]) {
      max = Math.max(max, data[0])
    }
  })
  return max
};