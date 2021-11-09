/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
  const map = {}
  for (let i = 0; i < list1.length; i++) {
    const j = list2.findIndex(item => item === list1[i])
    if (j !== -1) {
      map[list1[i]] = i + j
    }
  }
  let min = Math.min(...Object.values(map))
  let res = []
  Object.entries(map).forEach(data => {
    if (data[1] === min) {
      res.push(data[0])
    }
  })
  return res
};