/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const res = []
    const map = {}
    for (let i in groupSizes) {
      if (!map[groupSizes[i]]) map[groupSizes[i]] = []
      map[groupSizes[i]].push(i)
    }
    Object.entries(map).forEach(([size, arr]) => {
      if (arr.length > size) {
        for (let i = 0; i < arr.length; i += Number(size)) {
          res.push(arr.slice(i, i + Number(size)))
        }
      } else res.push(arr)
    })
    return res
  };