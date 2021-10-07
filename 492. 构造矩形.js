/**
 * @param {number} area
 * @return {number[]}
 */
 var constructRectangle = function(area) {
  const arr = []
  const minIdx = Math.sqrt(area)
  for (let i = area; i >= minIdx; i--) {
    const num = area / i
    if (Math.floor(num) === num) {
      arr.push([i, num])
    }
  }
  let diff = Number.MAX_SAFE_INTEGER
  let res = []
  arr.forEach(items => {
    if (Math.abs(items[0] - items[1]) < diff) {
      res = items
    }
  }) 
  return res
}; 